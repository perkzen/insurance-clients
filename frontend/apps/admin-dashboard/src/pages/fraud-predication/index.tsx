import React from 'react';
import { FraudPredictionForm } from 'manage-damage-claims';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';

const FraudPrediction = () => {
  return (
    <ProtectedRoute>
      <div className={'flex flex-col justify-center items-center'}>
        <FraudPredictionForm />
      </div>
    </ProtectedRoute>
  );
};

export default FraudPrediction;
