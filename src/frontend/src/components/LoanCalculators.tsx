import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calculator } from 'lucide-react';

const LoanCalculators = () => {
  const [principal, setPrincipal] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [tenure, setTenure] = useState<string>('');
  const [tenureType, setTenureType] = useState<'months' | 'years'>('years');
  const [emiResult, setEmiResult] = useState<{
    emi: number;
    totalInterest: number;
    totalAmount: number;
    principalAmount: number;
  } | null>(null);

  const calculateEMI = () => {
    const P = parseFloat(principal) || 0;
    const annualRate = parseFloat(interestRate) || 0;
    const tenureValue = parseFloat(tenure) || 0;
    
    // Convert to months if years
    const N = tenureType === 'years' ? tenureValue * 12 : tenureValue;
    
    // Monthly interest rate
    const R = annualRate / (12 * 100);
    
    if (P <= 0 || R <= 0 || N <= 0) {
      return;
    }
    
    // EMI Formula: EMI = [P x R x (1+R)^N]/[(1+R)^N-1]
    const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
    const totalAmount = emi * N;
    const totalInterest = totalAmount - P;
    
    setEmiResult({
      emi: Math.round(emi * 100) / 100,
      totalInterest: Math.round(totalInterest * 100) / 100,
      totalAmount: Math.round(totalAmount * 100) / 100,
      principalAmount: P,
    });
  };

  const getInterestPercentage = () => {
    if (!emiResult) return 0;
    return Math.round((emiResult.totalInterest / emiResult.totalAmount) * 100);
  };

  const getPrincipalPercentage = () => {
    if (!emiResult) return 0;
    return Math.round((emiResult.principalAmount / emiResult.totalAmount) * 100);
  };

  return (
    <section id="loan-calculators" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/assets/generated/calculator-icon.dim_128x128.png"
              alt="Loan Calculators"
              className="w-12 h-12"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Loan Calculators
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calculate your loan EMI and understand your repayment schedule
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-accent" />
                EMI Calculator
              </CardTitle>
              <CardDescription>Calculate your monthly loan installment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="principal">Loan Amount (₹)</Label>
                <Input
                  id="principal"
                  type="number"
                  placeholder="Enter loan amount"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="interestRate">Annual Interest Rate (%)</Label>
                <Input
                  id="interestRate"
                  type="number"
                  step="0.1"
                  placeholder="Enter interest rate"
                  value={interestRate}
                  onChange={(e) => setInterestRate(e.target.value)}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tenure">Loan Tenure</Label>
                  <Input
                    id="tenure"
                    type="number"
                    placeholder="Enter tenure"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tenureType">Tenure Type</Label>
                  <Select value={tenureType} onValueChange={(value: 'months' | 'years') => setTenureType(value)}>
                    <SelectTrigger id="tenureType">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="months">Months</SelectItem>
                      <SelectItem value="years">Years</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button onClick={calculateEMI} className="w-full">
                Calculate EMI
              </Button>
              
              {emiResult && (
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Monthly EMI</p>
                    <p className="text-3xl font-bold text-accent">₹{emiResult.emi.toLocaleString('en-IN')}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Principal Amount</p>
                      <p className="text-lg font-semibold">₹{emiResult.principalAmount.toLocaleString('en-IN')}</p>
                    </div>
                    
                    <div className="p-4 bg-muted rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Total Interest</p>
                      <p className="text-lg font-semibold">₹{emiResult.totalInterest.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-xs text-muted-foreground mb-1">Total Amount Payable</p>
                    <p className="text-xl font-bold">₹{emiResult.totalAmount.toLocaleString('en-IN')}</p>
                  </div>
                  
                  {/* Visual Breakdown */}
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Payment Breakdown</p>
                    <div className="flex h-8 rounded-lg overflow-hidden">
                      <div
                        className="bg-primary flex items-center justify-center text-xs text-primary-foreground font-medium"
                        style={{ width: `${getPrincipalPercentage()}%` }}
                      >
                        {getPrincipalPercentage()}%
                      </div>
                      <div
                        className="bg-accent flex items-center justify-center text-xs text-accent-foreground font-medium"
                        style={{ width: `${getInterestPercentage()}%` }}
                      >
                        {getInterestPercentage()}%
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>■ Principal</span>
                      <span>■ Interest</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoanCalculators;
