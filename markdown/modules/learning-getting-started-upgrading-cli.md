{%- set _mod_docs_content_type = "PROCEDURE" %}
# Manually upgrading your cluster using the CLI {id="learning-getting-started-upgrading-cli_{{ context }}"}

You can upgrade your cluster by using {{ rosa_cli }}. {._abstract}

**Procedure**

1.  Check if there is an upgrade available by running the following command:
    ```terminal
    $ rosa list upgrade -c <cluster-name>
    ```

    **For example**:
    ```terminal
    $ rosa list upgrade -c <cluster-name>
    VERSION  NOTES
    4.14.7   recommended
    4.14.6
    ...
    ```

    In the above example, versions 4.14.7 and 4.14.6 are both available.
1.  Schedule the cluster to upgrade within the hour by running the following command:
    ```terminal
    $ rosa upgrade cluster -c --control-plane <cluster-name> --version <desired-version>
    ```
1.  **Optional:** Schedule the cluster to upgrade at a later date and time by running the following command:
    ```terminal
    $ rosa upgrade cluster -c <cluster-name> --version <desired-version> --schedule-date <future-date-for-update> --schedule-time <future-time-for-update>
    ```