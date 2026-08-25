{%- set _mod_docs_content_type = "PROCEDURE" %}
# Loading data into the database {id="getting-started-cli-load-data-output_{{ context }}"}

After you have deployed the `mongodb-nationalparks` database application, load the national park location information into the database. {._abstract}

**Prerequisites**

*   You have deployed the `nationalparks` back-end application.
*   You have deployed the `mongodb-nationalparks` database application.

**Procedure**

*   Load the national parks data by running the following command:
    ```terminal
    $ oc exec $(oc get pods -l component=nationalparks | tail -n 1 | awk '{print $1;}') -- curl -s http://localhost:8080/ws/data/load
    ```
    ```text title="Example output"
    "Items inserted in database: 2893"
    ```

**Verification**

*   Verify that the map data was loaded properly by running the following command:
    ```terminal
    $ oc exec $(oc get pods -l component=nationalparks | tail -n 1 | awk '{print $1;}') -- curl -s http://localhost:8080/ws/data/all
    ```
    ```terminal title="Example output (trimmed)"
    ...
    , {"id": "Great Zimbabwe", "latitude": "-20.2674635", "longitude": "30.9337986", "name": "Great Zimbabwe"}]
    ```