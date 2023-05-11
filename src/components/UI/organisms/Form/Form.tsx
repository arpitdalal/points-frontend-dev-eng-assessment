import { useState } from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import type { Option } from "../../atoms/Select";
import { customFetch, formatCurrency, isNumeric } from "../../../../utils";
import ErrorMessage from "../../molecules/ErrorMessage";
import FormInput from "../../molecules/FormInput";
import Table, { type TableData } from "../Table";
import Heading from "../../atoms/Heading";

const API_ENDPOINT = "http://localhost:5000/tax-calculator/tax-year/";
interface TaxBrackets {
  tax_brackets: Array<{
    max?: number;
    min: number;
    rate: number;
  }>;
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 320px;
  gap: 16px;
  margin-top: 1rem;
`;

const options: Array<Option> = [
  { label: "Select a year", value: "", disabled: true },
  { label: "2019", value: "2019" },
  { label: "2020", value: "2020" },
  { label: "2021", value: "2021" },
  { label: "2022", value: "2022" },
];

type FormValue = {
  income: string;
  year: string;
};
type InputBlurs = {
  input: boolean;
  select: boolean;
};

export default function Form() {
  const [formValue, setFormValue] = useState<FormValue>({
    income: "",
    year: options[0].value,
  });
  const [inputBlurs, setInputBlurs] = useState<InputBlurs>({
    input: false,
    select: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [tax, setTax] = useState("");
  const [taxBreakdownForTable, setTaxBreakdownForTable] = useState<TableData>();

  const isIncomeInputInvalid = inputBlurs.input && !isNumeric(formValue.income);
  const isYearSelectInvalid = inputBlurs.select && !isNumeric(formValue.year);

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setTax("");

    if (isIncomeInputInvalid || isYearSelectInvalid) {
      return;
    }

    try {
      const taxBrackets = (await customFetch(
        `${API_ENDPOINT}${formValue.year}`
      )) as TaxBrackets;
      const numberIncome = Number(formValue.income);

      const allBrackets = taxBrackets.tax_brackets.map((bracket) => {
        return [bracket.min, bracket.max || Infinity, bracket.rate];
      });

      let totalTaxes = 0;
      for (const bracket of allBrackets) {
        if (numberIncome < bracket[1]) {
          totalTaxes += (numberIncome - bracket[0]) * bracket[2];
          break;
        } else {
          totalTaxes += (bracket[1] - bracket[0]) * bracket[2];
        }
      }

      /**
       * income = 36000
       * tax_brackets = [
       *  { min: 0, max: 10000, rate: 0.1 },
       *  { min: 10000, max: 20000, rate: 0.2 },
       *  { min: 20000, max: 30000, rate: 0.3 },
       *  { min: 30000, max: 40000, rate: 0.4 },
       * ]
       * taxBreakdown = [
       * { min: 0, max: 10000, rate: 0.1, tax: 1000 },
       * { min: 10000, max: 20000, rate: 0.2, tax: 2000 },
       * { min: 20000, max: 30000, rate: 0.3, tax: 3000 },
       * { min: 30000, max: 36000, rate: 0.4, tax: 2400 },
       * ]
       */
      const taxBreakdown = taxBrackets.tax_brackets.map((bracket) => {
        const min = bracket.min;
        const max = bracket.max || Infinity;
        const rate = bracket.rate;
        if (numberIncome > min && numberIncome <= max) {
          const tax = (numberIncome - min) * rate;
          return {
            min,
            max: numberIncome,
            rate,
            tax: Number(tax.toFixed(2)),
          };
        }
        if (numberIncome > max) {
          const tax = (max - min) * rate;
          return {
            min,
            max,
            rate,
            tax: Number(tax.toFixed(2)),
          };
        }
      });

      console.log(taxBreakdown);

      const cleanArrayOfTaxBreakdown = taxBreakdown.filter(Boolean);

      const taxBreakdownForTable: TableData = cleanArrayOfTaxBreakdown.map(
        (bracket) => {
          return [
            {
              heading: false,
              value: `${formatCurrency(bracket.min, 0)} - ${formatCurrency(
                bracket.max,
                0
              )}`,
            },
            {
              heading: false,
              value: `${(bracket.rate * 100).toFixed(2)}%`,
            },
            {
              heading: false,
              value: formatCurrency(bracket.tax),
            },
          ];
        }
      );

      taxBreakdownForTable.unshift([
        { heading: true, value: "Tax Bracket" },
        { heading: true, value: "Tax Rate" },
        { heading: true, value: "Tax Amount" },
      ]);

      setTaxBreakdownForTable(taxBreakdownForTable);

      setTax(totalTaxes.toFixed(2));
      setError("");
    } catch (error) {
      console.log(error); // should log to a service like Sentry
      setError("Something went wrong. Please try again later.");
      setTax("");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Heading type="h1">Tax Calculator</Heading>
      <StyledForm onSubmit={handleFormSubmit}>
        <FormInput
          inputType="input"
          id="income"
          name="income"
          label="Income"
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="0"
          value={formValue.income}
          onChange={(event) => {
            setTax("");
            setFormValue({
              ...formValue,
              income: event.target.value,
            });
          }}
          onBlur={() =>
            setInputBlurs({
              ...inputBlurs,
              input: true,
            })
          }
          error={
            isIncomeInputInvalid
              ? "Invalid income, only numbers are allowed"
              : undefined
          }
          disabled={isLoading}
          autoFocus
          required
        />
        <FormInput
          inputType="select"
          id="year"
          name="year"
          label="Year"
          value={formValue.year}
          options={options}
          onChange={(event) => {
            setTax("");
            setFormValue({
              ...formValue,
              year: event.target.value,
            });
          }}
          onBlur={() =>
            setInputBlurs({
              ...inputBlurs,
              select: true,
            })
          }
          error={isYearSelectInvalid ? "Please select a year" : undefined}
          disabled={isLoading}
          required
        />
        <Button type="submit" loading={isLoading} margin="0.5rem 0 0 0">
          Calculate
        </Button>
      </StyledForm>
      {error && !tax ? (
        <ErrorMessage margin="0.5rem 0 0 0">{error}</ErrorMessage>
      ) : null}
      {tax && !error ? (
        <>
          <Heading type="h5" margin="1.5rem 0 0 0" textAlign="center">
            Your tax calculation for the year {formValue.year}
          </Heading>
          <Table
            data={[
              [
                {
                  heading: true,
                  value: "Annual Income",
                },
                {
                  heading: true,
                  value: "Total Taxes",
                },
              ],
              [
                {
                  heading: false,
                  value: formatCurrency(formValue.income, 0),
                },
                {
                  heading: false,
                  value: formatCurrency(tax),
                },
              ],
            ]}
            maxWidth="400px"
            margin="0.5rem 0 0 0"
          />
          <Heading type="h5" margin="1rem 0 0 0" textAlign="center">
            Your tax breakdown
          </Heading>
          <Table
            data={taxBreakdownForTable || []}
            maxWidth="800px"
            margin="0.5rem 0 0 0"
          />
        </>
      ) : null}
    </>
  );
}
