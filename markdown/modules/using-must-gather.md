{%- set _mod_docs_content_type = "PROCEDURE" %}
# Using the must-gather tool {id="oadp-running-must-gather_{{ context }}"}

Run the `must-gather` tool with the default configuration, timeout, and insecure TLS options. To use an option, add a flag corresponding to that option in the `must-gather` command. {._abstract}


Default configuration
:   This configuration collects pod logs, {{ oadp_short }}, and `Velero` custom resource (CR) information for all namespaces where the {{ oadp_short }} Operator is installed.

Timeout
:   Data collection can take a long time if there are many failed `Backup` CRs. You can improve performance by setting a timeout value.

Insecure TLS connections
:   If a custom CA certificate is used, use the `must-gather` tool with insecure TLS connections.

The `must-gather` tool generates a Markdown output file with the collected information. The Markdown file is located in a cluster directory.

For more information about the supported flags, use the help flag with the `must-gather` tool as shown in the following example:

```terminal
$ oc adm must-gather --image={{ must_gather_v1_5 }} -- /usr/bin/gather -h
```

**Prerequisites**

*   You have logged in to the {{ product_title }} cluster as a user with the `cluster-admin` role.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  Navigate to the directory where you want to store the `must-gather` data.
1.  Run the `oc adm must-gather` command for one of the following data collection options:
    *   To use the default configuration of the `must-gather` tool, run the following command:
        ```terminal
        $ oc adm must-gather --image={{ must_gather_v1_5 }}
        ```
    *   To use the timeout flag with the `must-gather` tool, run the following command:
        ```terminal
        $ oc adm must-gather --image={{ must_gather_v1_5 }} -- /usr/bin/gather --request-timeout 1m
        ```

        In this example, the timeout is 1 minute.
    *   To use the insecure TLS connection flag with the `must-gather` tool, run the following command:
        ```terminal
        $ oc adm must-gather --image={{ must_gather_v1_5 }} -- /usr/bin/gather --skip-tls
        ```
    *   To use a combination of the insecure TLS connection and the timeout flags with the `must-gather` tool, run the following command:
        ```terminal
        $ oc adm must-gather --image={{ must_gather_v1_5 }} -- /usr/bin/gather --request-timeout 15s --skip-tls
        ```

        In this example, the timeout is 15 seconds. By default, the `--skip-tls` flag value is `false`. Set the value to `true` to allow insecure TLS connections.

**Verification**

1.  Verify that the Markdown output file is generated at the following location: `must-gather.local.89...054550/registry.redhat.io/oadp/oadp-mustgather-rhel9:v1.5-sha256-0...84/clusters/a4...86/oadp-must-gather-summary.md`
1.  Review the `must-gather` data in the Markdown file by opening the file in a Markdown previewer. For an example output, refer to the following image. You can upload this output file to a support case on the [Red&#160;Hat Customer Portal](https://access.redhat.com/).
    **Figure 1. Example markdown output of must-gather tool**

    ![must-gather markdown output](/_assets/images/oadp-must-gather-markdown-output.png)