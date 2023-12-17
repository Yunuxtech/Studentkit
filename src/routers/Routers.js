import React from 'react';
import { Routes, Route,Navigate } from "react-router-dom";

import Home from '../components/Home';
import AverageCalculator from '../pages/AverageCalculator';
import ExponentCalculator from '../pages/ExponentCalculator';
import NumberToRoman from '../pages/NumberToRoman';
import NumberToWord from '../pages/NumberToWord';
import PercentageCalculator from '../pages/PercentageCalculator';
import PrimeNumberChecker from '../pages/PrimeNumberChecker';
import QuadraticEquationSolver from '../pages/QuadraticEquationSolver';
import RatioCalculator from '../pages/RatioCalculator';
import SimpleInterestCalculator from '../pages/SimpleInterestCalculator';
import UnitConverter from '../pages/UnitConverter';
import Bmi from '../pages/Bmi';
import TemperatureConverter from '../pages/TemperatureConverter';


const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to='home'/>} />
      <Route path="home" element={<Home />} />
      <Route path="AverageCalculator" element={<AverageCalculator />} />
      <Route path="ExponentCalculator" element={<ExponentCalculator />} />
      <Route path="NumberToRoman" element={<NumberToRoman />} />
      <Route path="NumberToWord" element={<NumberToWord />} />
      <Route path="PercentageCalculator" element={<PercentageCalculator />} />
      <Route path="PrimeNumberChecker" element={<PrimeNumberChecker />} />
      <Route path="QuadraticEquationSolver" element={<QuadraticEquationSolver />} />
      <Route path="RatioCalculator" element={<RatioCalculator />} />
      <Route path="SimpleInterestCalculator" element={<SimpleInterestCalculator />} />
      <Route path="UnitConverter" element={<UnitConverter />} />
      <Route path="Bmi" element={<Bmi />} />
      <Route path="TemperatureConverter" element={<TemperatureConverter />} />
    </Routes>
  );
};

export default Routers;
