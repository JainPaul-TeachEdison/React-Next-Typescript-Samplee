import React, { useState, useEffect } from 'react';

const withLoader = function<T>(WrappedComponent: React.ComponentType<T>) {
  return function WithLoader(props: T) {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
          try {            
            setTimeout(() => {
                console.log("Data fetched successfully");
              setData(data);
              setIsLoading(false);
            }, 5000); 
          } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          }
        };
      
        fetchData();
      }, []);

    return (
      <div>
        {isLoading ? <p>Loading...</p> : <WrappedComponent data={data} {...props} />}
      </div>
    );
  };
};

type MyComponentProps = {
  data: number;
};

const MyComponent = function ({ data }: MyComponentProps) {
  return (
    <div>
      <h1>Data from HOC:</h1>
      <p>{data}</p>
    </div>
  );
};

const MyComponentWithLoader = withLoader<MyComponentProps>(MyComponent);

const App = function () {
  return (
    <div>
      <h1>Higher-Order Component Example</h1>
      <MyComponentWithLoader data={10} />
    </div>
  );
};

export default App;
