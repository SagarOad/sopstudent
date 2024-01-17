import { ApexOptions } from 'apexcharts';
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';

interface ChartThreeState {
  series: number[];
}

const data = {
  labels: [
    'English',
    'Urdu',
    'Basic Math',
    'Islamiat',
    'Science',
    'Computer',
    'Chemistry',
    'Physics',
    'Pakistan Studies',
    'Creative Thinking',
    'Verbal Intelligence',
    'Non-verbal Intelligent',
    'Mechanical',
    'General Knowledge',
    'Quick Mental Mathematics',
  ],
  datasets: [
    {
      label: 'bjhbjkhbjk',
      data: [10, 20, 15, 25, 100, 50, 30, 65 , 48, 80, 10, 73, 50, 30,65 ],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(255, 205, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(201, 203, 207, 0.5)',
        
        'rgba(255, 6, 132, 0.5)',
        'rgba(25, 159, 4, 0.5)',
        'rgba(255, 05, 86, 0.5)',
        'rgba(75, 192, 19, 0.5)',
        'rgba(5, 12, 35, 0.5)',
        'rgba(13, 102, 255, 0.5)',
        'rgba(21, 203, 207, 0.5)',
      ],
      borderWidth: 0,
      fill: false,
    },
  ],
};

const options: object = {
  scales: {
    x: {
      title: {
        display: true,
        text: 'Student Record Data',
      },
    },
  },
  plugins: {
    tooltip: {
      callbacks: {
        title: (xDatapoint: any) => {
          return xDatapoint.raw;
        },
        label: (yDatapoint: any) => {
          if (yDatapoint.raw <= 50) {
            return 'Charlie';
          }

          if (yDatapoint.raw <= 30) {
            return 'Delta';
          }

          if (yDatapoint.raw <= 70) {
            return 'Beta';
          }

          if (yDatapoint.raw > 70) {
            return 'Alpha';
          }
        },
      },
    },
    legend: {
      labels: {
        boxWidth: 0,
      },
      display: false,
    },
  },
};

// const options = {
//   chart: {
//     type: 'bar',
//   },
//   series: [
//     {
//       data: [10, 40, 20, 44, 22, 12],
//     },
//   ],
//   xaxis: {
//     categories: [1, 2, 3, 4, 5, 6],
//   },
// };

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [65, 34, 12, 56, 34, 12, 56],
  });

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7.5 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3 justify-between gap-4 sm:flex">
        <div>
          <h5 className="text-xl text-[32px]  font-semibold text-black dark:text-white">
            Student Record Graph
          </h5>
        </div>
        <div>
          <div className="relative z-20 inline-block">
            <select
              name=""
              id=""
              className="relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 text-sm font-medium outline-none"
            >
              <option value="">Monthly</option>
              <option value="">Yearly</option>
            </select>
            <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                  fill="#637381"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                  fill="#637381"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <div className="mb-2">
        <h1 className="mt-4 mb-6 text-center text-[22px] dark:text-white">
          Student Test Result Analysis
        </h1>
        <div id="chartThree" className="mx-auto flex justify-center">
          <Chart type="bar" data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
