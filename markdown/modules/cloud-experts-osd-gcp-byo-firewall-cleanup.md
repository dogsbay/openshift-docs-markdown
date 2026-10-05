{%- set _mod_docs_content_type = "PROCEDURE" %}
# Clean up the baseline test workload (optional) {id="cloud-experts-osd-gcp-byo-firewall-cleanup_{{ context }}"}

If you deployed the baseline test workload earlier in this tutorial, remove it. {._abstract}

**Procedure**

*   Delete the test project:
    ```terminal
    $ oc delete project byo-fw-test
    ```

**Verification**

*   Verify that the test project no longer exists:
    ```terminal
    $ oc get project byo-fw-test
    ```
    ```terminal title="Example output"
    Error from server (NotFound): namespaces "byo-fw-test" not found
    ```