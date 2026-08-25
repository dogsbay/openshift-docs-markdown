{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing {{ insights_operator }} gather durations {id="insights-operator-gather-duration_{{ context }}"}

You can view the time it takes for the {{ insights_operator }} to gather the information contained in the archive. This helps you to understand {{ insights_operator }} resource usage and issues with {{ red_hat_lightspeed }} Advisor. {._abstract}

**Prerequisites**

*   A recent copy of your {{ insights_operator }} archive.

**Procedure**

1.  From your archive, open `/insights-operator/gathers.json`.

    The file contains a list of {{ insights_operator }} gather operations:
    ```json
        {
          "name": "clusterconfig/authentication",
          "duration_in_ms": 730,
          "records_count": 1,
          "errors": null,
          "panic": null
        }
    ```

    The `duration_in_ms` field is the amount of time in milliseconds for each gather operation.
1.  Inspect each gather operation for abnormalities.