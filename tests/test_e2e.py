
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)


def test_user_journey():
    response = client.post("/users/", json={"name": "Alice",
                                            "email": "alice@example.com"})
    assert response.status_code == 200
    user_id = response.json()["id"]

    get_response = client.get(f"/users/{user_id}")
    assert get_response.status_code == 200
    assert get_response.json()["email"] == "alice@example.com"
