
from locust import HttpUser, task

class WebsiteUser(HttpUser):
    @task
    def create_and_read_user(self):
        user = {"name": "LoadTester", "email": "load@test.com"}
        response = self.client.post("/users/", json=user)
        if response.status_code == 200:
            user_id = response.json()["id"]
            self.client.get(f"/users/{user_id}")
