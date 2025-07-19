import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '5s', target: 10 },  // Ramp up to 10 users
    { duration: '10s', target: 10 }, // Hold at 10 users
    { duration: '5s', target: 0 },   // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    http_req_failed: ['rate<0.01'],   // error rate < 1%
  },
};

export default function () {
  let res = http.get('http://localhost:8000/users/1');
  check(res, {
    'status was 200': (r) => r.status === 200,
  });
  sleep(1);
}
