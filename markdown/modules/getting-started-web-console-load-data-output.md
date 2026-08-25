{%- set _mod_docs_content_type = "PROCEDURE" %}
# Loading data into the database {id="getting-started-web-console-load-data-output_{{ context }}"}

After you have deployed the `mongodb-nationalparks` database application, load the national park location information into the database. {._abstract}

**Prerequisites**

*   You have deployed the `nationalparks` back-end application.
*   You have deployed the `mongodb-nationalparks` database application.

**Procedure**

1.  Navigate to **Workloads** -> **Topology**.
1.  Click the `nationalparks` deployment and select the **Resources** tab.
1.  Copy the **Location** URL from your route.
1.  Paste the URL into your web browser and add the following at the end of the URL:
    ```text
    /ws/data/load
    ```

    For example:
    ```text
    https://nationalparks-user-getting-started.apps.cluster.example.com/ws/data/load
    ```
    ```text title="Example output"
    Items inserted in database: 2893
    ```