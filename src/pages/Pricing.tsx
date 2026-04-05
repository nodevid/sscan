export function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: ['Basic vulnerability scan', 'Quick scan results', 'No registration required'],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$19',
      features: ['Detailed security analysis', 'Scan history', 'PDF reports', 'Email notifications', 'Priority support'],
      cta: 'Subscribe',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      features: ['Everything in Pro', 'API access', 'Custom security rules', 'Priority queue', 'Dedicated support'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
        Simple, Transparent Pricing
      </h1>
      <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
        Choose the plan that works best for you
      </p>
      
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 ${
              plan.popular ? 'ring-2 ring-blue-600' : ''
            }`}
          >
            {plan.popular && (
              <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                Popular
              </span>
            )}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-4">
              {plan.name}
            </h3>
            <p className="text-4xl font-bold text-gray-900 dark:text-white mt-2">
              {plan.price}
              {plan.price !== 'Custom' && <span className="text-lg font-normal text-gray-500">/month</span>}
            </p>
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-600 dark:text-gray-400">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full mt-6 py-3 rounded-lg font-semibold transition ${
              plan.popular
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
