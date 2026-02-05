import React from 'react';
import { Activity, Beaker, Pill, Droplet, Heart, Scale, TrendingUp } from 'lucide-react';

const Intro: React.FC = () => {
  return (
    <div className="space-y-10 pb-16 w-full">
      <section className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          Diabetes Study Data Quality Explorer
        </h1>
        <p className="text-gray-600 leading-relaxed text-lg">
          An interactive tool for exploring data quality issues in clinical research datasets. Learn about common quality challenges through real examples from a diabetes study.
        </p>
      </section>

      {/* Medical Context Section */}
      <section className="bg-blue-50 border border-blue-200 rounded-xl p-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 text-white rounded-lg">
            <Activity size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">What is Diabetes?</h2>
        </div>

        <div className="bg-white rounded-lg p-6 border border-blue-100">
          <p className="text-gray-700 leading-relaxed mb-4">
            A chronic condition where the body cannot properly regulate blood sugar (glucose).
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Normal glucose:</strong> ~70-100 mg/dL (fasting)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Diabetic glucose:</strong> Often &gt;126 mg/dL (fasting)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-blue-600">•</span>
              <span><strong>Goal:</strong> Keep glucose as close to normal as possible</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Key Measurements Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">Key Measurements You'll See</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Glucose Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-red-50 text-red-600 rounded-lg">
                <Droplet size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Glucose</h3>
            </div>
            <p className="text-sm text-gray-600">Blood sugar level</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Measured in mg/dL (USA) or mmol/L (Europe)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Checked frequently (daily or multiple times per day)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-500">•</span>
                <span>Can vary throughout the day based on food, activity, medication</span>
              </li>
            </ul>
          </div>

          {/* HbA1c Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <TrendingUp size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">HbA1c</h3>
            </div>
            <p className="text-sm text-gray-600">Hemoglobin A1c (glycated hemoglobin)</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span>Measures <strong>AVERAGE</strong> glucose control over past 2-3 months</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span>Reported as percentage (%) or mmol/mol</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span>Target for diabetics: Usually &lt;7% (good control)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-purple-500">•</span>
                <span className="italic">Think of it like: Glucose = today's temperature, HbA1c = seasonal average</span>
              </li>
            </ul>
          </div>

          {/* Blood Pressure Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <Heart size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Blood Pressure</h3>
            </div>
            <p className="text-sm text-gray-600">Force of blood against artery walls</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Format: Systolic/Diastolic (e.g., 120/80 mmHg)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Important in diabetes because high BP increases complications</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-500">•</span>
                <span>Target: Usually &lt;130/80 for diabetics</span>
              </li>
            </ul>
          </div>

          {/* Weight Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                <Scale size={20} />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Weight</h3>
            </div>
            <p className="text-sm text-gray-600">Body weight in kg or lbs</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-green-500">•</span>
                <span>Important because weight loss can improve glucose control</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-500">•</span>
                <span>Tracked over time to see trends</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Medications Section */}
      <section className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-50 text-green-600 rounded-lg">
            <Pill size={24} />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Medications You'll See</h2>
        </div>

        <div className="space-y-4">
          <div className="pl-6 border-l-2 border-green-200">
            <h4 className="font-bold text-gray-900 mb-1">Metformin</h4>
            <p className="text-sm text-gray-600">First-line diabetes pill, lowers glucose production</p>
          </div>
          <div className="pl-6 border-l-2 border-green-200">
            <h4 className="font-bold text-gray-900 mb-1">Insulin Glargine <span className="text-gray-500 font-normal">(brand name: Lantus)</span></h4>
            <p className="text-sm text-gray-600">Long-acting injectable insulin</p>
          </div>
          <div className="pl-6 border-l-2 border-green-200">
            <h4 className="font-bold text-gray-900 mb-1">Sitagliptin</h4>
            <p className="text-sm text-gray-600">Diabetes pill that helps body produce more insulin</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-sm text-amber-900 font-medium mb-2">⚠️ Important Notes:</p>
          <ul className="space-y-1 text-sm text-amber-800">
            <li>• Same drug can have multiple names (generic vs brand)</li>
            <li>• Dose matters! (500mg ≠ 1000mg)</li>
          </ul>
        </div>
      </section>

      {/* Data Sources Section */}
      <section className="bg-gray-50 border border-gray-200 rounded-xl p-10">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <div className="lg:w-1/4">
            <div className="inline-block p-3 bg-white border border-gray-200 text-blue-600 rounded-lg mb-4 shadow-sm">
              <Beaker size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Data Sources Explained</h2>
            <p className="text-gray-500 text-sm">Understanding the reliability and characteristics of different data collection methods.</p>
          </div>
          <div className="lg:w-3/4 grid sm:grid-cols-3 gap-6">
            <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-bold uppercase rounded mb-3">
                Most Reliable
              </div>
              <div className="text-sm font-bold mb-2 text-gray-900">Lab Test</div>
              <p className="text-sm text-gray-600 leading-relaxed">Blood drawn at hospital/clinic, analyzed by machine</p>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold uppercase rounded mb-3">
                Variable
              </div>
              <div className="text-sm font-bold mb-2 text-gray-900">Patient Self-Report</div>
              <p className="text-sm text-gray-600 leading-relaxed">Patient checks at home with personal device (less reliable, different equipment)</p>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
              <div className="inline-block px-2 py-1 bg-orange-100 text-orange-800 text-xs font-bold uppercase rounded mb-3">
                Error-Prone
              </div>
              <div className="text-sm font-bold mb-2 text-gray-900">Manual Entry</div>
              <p className="text-sm text-gray-600 leading-relaxed">Healthcare worker types in value, might be from observation or transcription (prone to human error)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;