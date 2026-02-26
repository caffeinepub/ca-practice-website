import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calculator } from 'lucide-react';

const TaxCalculators = () => {
  // Income Tax Calculator State
  const [income, setIncome] = useState<string>('');
  const [deduction80C, setDeduction80C] = useState<string>('');
  const [deduction80D, setDeduction80D] = useState<string>('');
  const [incomeTax, setIncomeTax] = useState<number | null>(null);

  // GST Calculator State
  const [amount, setAmount] = useState<string>('');
  const [gstRate, setGstRate] = useState<string>('');
  const [gstResult, setGstResult] = useState<{
    cgst: number;
    sgst: number;
    total: number;
  } | null>(null);

  const calculateIncomeTax = () => {
    const annualIncome = parseFloat(income) || 0;
    const ded80C = Math.min(parseFloat(deduction80C) || 0, 150000);
    const ded80D = Math.min(parseFloat(deduction80D) || 0, 25000);
    
    const taxableIncome = Math.max(annualIncome - ded80C - ded80D, 0);
    
    let tax = 0;
    
    // FY 2024-25 New Tax Regime Slabs
    if (taxableIncome <= 300000) {
      tax = 0;
    } else if (taxableIncome <= 700000) {
      tax = (taxableIncome - 300000) * 0.05;
    } else if (taxableIncome <= 1000000) {
      tax = 20000 + (taxableIncome - 700000) * 0.10;
    } else if (taxableIncome <= 1200000) {
      tax = 50000 + (taxableIncome - 1000000) * 0.15;
    } else if (taxableIncome <= 1500000) {
      tax = 80000 + (taxableIncome - 1200000) * 0.20;
    } else {
      tax = 140000 + (taxableIncome - 1500000) * 0.30;
    }
    
    // Add 4% cess
    tax = tax * 1.04;
    
    setIncomeTax(Math.round(tax));
  };

  const calculateGST = () => {
    const baseAmount = parseFloat(amount) || 0;
    const rate = parseFloat(gstRate) || 0;
    
    const gstAmount = (baseAmount * rate) / 100;
    const cgst = gstAmount / 2;
    const sgst = gstAmount / 2;
    const totalAmount = baseAmount + gstAmount;
    
    setGstResult({
      cgst: Math.round(cgst * 100) / 100,
      sgst: Math.round(sgst * 100) / 100,
      total: Math.round(totalAmount * 100) / 100,
    });
  };

  return (
    <section id="tax-calculators" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/assets/generated/calculator-icon.dim_128x128.png"
              alt="Tax Calculators"
              className="w-12 h-12"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Tax Calculators
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Calculate your income tax and GST with our easy-to-use calculators
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Income Tax Calculator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-accent" />
                Income Tax Calculator
              </CardTitle>
              <CardDescription>Calculate tax for FY 2024-25 (New Regime)</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="income">Annual Income (₹)</Label>
                <Input
                  id="income"
                  type="number"
                  placeholder="Enter annual income"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="deduction80C">Deduction under 80C (₹)</Label>
                <Input
                  id="deduction80C"
                  type="number"
                  placeholder="Max ₹1,50,000"
                  value={deduction80C}
                  onChange={(e) => setDeduction80C(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="deduction80D">Deduction under 80D (₹)</Label>
                <Input
                  id="deduction80D"
                  type="number"
                  placeholder="Max ₹25,000"
                  value={deduction80D}
                  onChange={(e) => setDeduction80D(e.target.value)}
                />
              </div>
              
              <Button onClick={calculateIncomeTax} className="w-full">
                Calculate Tax
              </Button>
              
              {incomeTax !== null && (
                <div className="mt-4 p-4 bg-accent/10 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Total Tax Payable</p>
                  <p className="text-2xl font-bold text-accent">₹{incomeTax.toLocaleString('en-IN')}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    *Includes 4% cess. Based on new tax regime slabs.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* GST Calculator */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-accent" />
                GST Calculator
              </CardTitle>
              <CardDescription>Calculate GST amount and total</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount">Base Amount (₹)</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter base amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gstRate">GST Rate (%)</Label>
                <Input
                  id="gstRate"
                  type="number"
                  placeholder="Enter GST rate (e.g., 18)"
                  value={gstRate}
                  onChange={(e) => setGstRate(e.target.value)}
                />
              </div>
              
              <Button onClick={calculateGST} className="w-full">
                Calculate GST
              </Button>
              
              {gstResult && (
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">CGST ({parseFloat(gstRate) / 2}%)</span>
                      <span className="font-medium">₹{gstResult.cgst.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-muted rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">SGST/IGST ({parseFloat(gstRate) / 2}%)</span>
                      <span className="font-medium">₹{gstResult.sgst.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Total Amount</span>
                      <span className="text-2xl font-bold text-accent">₹{gstResult.total.toLocaleString('en-IN')}</span>
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

export default TaxCalculators;
