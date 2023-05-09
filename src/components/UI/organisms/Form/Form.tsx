import { useState } from "react";
import styled from "styled-components";
import Button from "../../atoms/Button";
import type { Option } from "../../atoms/Select";
import { customFetch, formatCurrency, isNumeric } from "../../../../utils";
import ErrorMessage from "../../molecules/ErrorMessage";
import Text from "../../atoms/Text";
import FormInput from "../../molecules/FormInput";

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
`;

const options: Array<Option> = [
  { label: "Select a year", value: "", disabled: true },
  { label: "2019", value: "2019" },
  { label: "2020", value: "2020" },
  { label: "2021", value: "2021" },
  { label: "2022", value: "2022" },
];

export default function Form() {
  const [income, setIncome] = useState("");
  const [isIncomeInputBlur, setIsIncomeInputBlur] = useState(false);
  const [year, setYear] = useState(options[0].value);
  const [isYearSelectBlur, setIsYearSelectBlur] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [tax, setTax] = useState("");
  const [prevIncome, setPrevIncome] = useState("");
  const [prevYear, setPrevYear] = useState("");

  const isIncomeInputInvalid = isIncomeInputBlur && !isNumeric(income);
  const isYearSelectInvalid = isYearSelectBlur && !isNumeric(year);

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
        `${API_ENDPOINT}${year}`
      )) as TaxBrackets;
      const numberIncome = Number(income);

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

      setTax(totalTaxes.toFixed(2));
      setError("");
      setPrevIncome(income);
      setPrevYear(year);
      setIncome("");
      setYear(options[0].value);
      setIsIncomeInputBlur(false);
      setIsYearSelectBlur(false);
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
          value={income}
          onChange={(event) => setIncome(event.target.value)}
          onBlur={() => setIsIncomeInputBlur(true)}
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
          value={year}
          options={options}
          onChange={(event) => setYear(event.target.value)}
          onBlur={() => setIsYearSelectBlur(true)}
          error={isYearSelectInvalid ? "Please select a year" : undefined}
          disabled={isLoading}
          required
        />
        <Button type="submit" loading={isLoading} margin="0.5rem 0 0 0">
          Submit
        </Button>
      </StyledForm>
      {error && !tax ? (
        <ErrorMessage margin="0.5rem 0 0 0">{error}</ErrorMessage>
      ) : null}
      {tax && !error ? (
        <Text margin="0.5rem 0 0 0">
          Your tax for year {prevYear} and {formatCurrency(prevIncome)} income
          is <strong>{formatCurrency(tax)}</strong>
        </Text>
      ) : null}
    </>
  );
}
