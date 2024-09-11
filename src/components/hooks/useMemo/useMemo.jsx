import { useMemo, useState } from "react";

export const DefaultUseMemo = () => {
  const [milkQty, setMilkQty] = useState(1);
  const [riceQty, setRiceQty] = useState(1);

  const milkPriceCalculation = useMemo(() => {
    console.log("milk calculation...")
    const priceOfMilk = 50;
    return milkQty * priceOfMilk;
  }, [milkQty]);

  const ricePriceCalculation = useMemo(() => {
    console.log("rice calculation....")
    const priceOfRice = 100;
    return riceQty * priceOfRice;
  }, [riceQty]);

  const milkHandler = () => {
    setMilkQty(milkQty + 1);
  };

  const riceHandler = () => {
    setRiceQty(riceQty + 1);
  };

  return (
    <>
      <h3>
        Milk Quantity {milkQty} --price {milkPriceCalculation}
      </h3>
      <h3>
        Rice Quantity {riceQty} --price {ricePriceCalculation}
      </h3>

      <button onClick={milkHandler}>Increase Milk Quantity</button>
      <button onClick={riceHandler}>Increase Rice Quantity</button>
    </>
  );
};
