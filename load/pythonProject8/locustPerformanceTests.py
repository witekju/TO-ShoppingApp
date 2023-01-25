from locust import HttpUser, constant, task


class MyReqRes(HttpUser):

    host = "https://firestore.googleapis.com"
    wait_time = constant(1)

    @task
    def get_all_doc_in_collection(self):
        self.client.get("/v1/projects/shoppinglist-3333/databases/(default)/documents/lists")

    @task
    def get_doc_by_id(self):
        self.client.get("/v1/projects/shoppinglist-3333/databases/(default)/documents/lists/0vpGIRKGuVCEzjwOptBH")

    @task
    def create_doc(self):
        self.client.post("/v1/projects/shoppinglist-3333/databases/(default)/documents/lists", json={
            "fields": {
                "title": {
                    "stringValue": "Test123"
                },
                "uid": {
                    "stringValue": "test"
                },
                "isDone": {
                    "booleanValue": "false"
                },
                "date": {
                    "stringValue": "2023-01-04"
                }
            },
            "createTime": "2023-01-22T22:00:56.723640Z",
            "updateTime": "2023-01-22T22:01:02.532437Z"
        })

    @task
    def delete_doc(self):
        self.client.delete("/v1/projects/shoppinglist-3333/databases/(default)/documents/lists/M8M0lX05uaXBJsz9tKFM")


