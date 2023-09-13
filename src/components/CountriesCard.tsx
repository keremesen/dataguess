import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";

interface Country {
  code: string;
  name: string;
  currency: string;
  emoji: string;
  phone: string;
}

interface CountriesCardProps {
  filteredSearch: string;
  groupSize: number | string;
}

const CountriesCard: React.FC<CountriesCardProps> = ({
  filteredSearch,
  groupSize,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<number | null>(null);

  const handleCountryClick = (idx: number) => {
    setSelectedCountry(idx === selectedCountry ? null : idx);
  };

  const GET_COUNTRY = gql`
    query Query {
      countries {
        code
        name
        currency
        emoji
        phone
      }
    }
  `;

  const { loading, error, data } = useQuery<{ countries: Country[] }>(GET_COUNTRY);

  const filteredArray = data?.countries.filter((country) =>
    country.name.toLowerCase().includes(filteredSearch.toLowerCase())
  );

  let slicedData = filteredArray?.slice(0, Number(groupSize));

  useEffect(() => {
    setSelectedCountry(slicedData?.length && slicedData.length <= 10 ? slicedData.length - 1 : 9);
  }, [slicedData?.length]);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      {slicedData?.map((country, idx) => (
        <div
          className={`flex flex-col space-y-4 font-semibold h-48 m-2 w-48 shadow-lg p-3  bg-gray-50 rounded-md cursor-pointer ${
            idx === selectedCountry ? "bg-selectedColor" : ""
          } `}
          key={idx}
          onClick={() => handleCountryClick(idx)}
        >
          <div className="flex justify-between">
            <p> {country.name} </p>
            <span> {country.emoji} </span>
          </div>
          <div className="flex  justify-between">
            {" "}
            <p> {country.code} </p>
            <p> {country.currency} </p>
          </div>
          <span> {"+" + country.phone}</span>
        </div>
      ))}
    </>
  );
};

export default CountriesCard;
