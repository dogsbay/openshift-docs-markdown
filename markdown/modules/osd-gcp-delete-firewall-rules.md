{%- set _mod_docs_content_type = "PROCEDURE" %}
# Delete firewall rules for {{ product_title }} on {{ gcp_short }} {id="osd-gcp-delete-firewall-rules_{{ context }}"}

When you no longer need the firewall rules or when deleting a cluster, you can generate a script to delete the firewall rules that were created for reduced Workload Identity Federation (WIF) permissions. {._abstract}

**Prerequisites**

*   You have previously created firewall rules by using the `ocm gcp create firewall-rules` command.
*   You know the firewall rule prefix that was used when creating the firewall rules.
*   You have downloaded the latest version of the {{ cluster_manager }} CLI (`ocm`) for your operating system from the [Downloads](https://console.redhat.com/openshift/downloads) page on {{ cluster_manager }}.

**Procedure**

1.  Generate a deletion script by running the following command:
    ```terminal
    $ ocm gcp delete firewall-rules <firewall_rule_prefix> \
      --mode manual \
      --output-file <output_file>
    ```

    where:

    `<firewall_rule_prefix>`
    :   The prefix used when creating the firewall rules.


`<host_project_id>`
:   The ID of the {{ gcp_short }} project where the firewall rules are located.


`<output_file>`
:   The path to the file where the command saves the generated deletion bash script.

1.  Review the generated script and run it to delete the firewall rules:
    ```terminal
    $ bash <output_file>
    ```