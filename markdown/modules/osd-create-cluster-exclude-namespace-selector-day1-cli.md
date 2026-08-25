{%- set _mod_docs_content_type = "PROCEDURE" %}
# Set namespace exclusions for the default ingress when creating a cluster in the CLI {id="osd-create-cluster-exclude-namespace-selector-day1-cli_{{ context }}"}

Use the `ocm` CLI to pass namespace exclusions for the default ingress while creating your {{ product_title }} cluster. {._abstract}

**Prerequisites**

*   You installed the `ocm` CLI and logged in with credentials that can create clusters in {{ cluster_manager_first }}.
*   You are using the noninteractive mode for `ocm create cluster`. For interactive mode, use the prompts for ingress settings when they are available for your `ocm` version.

**Procedure**

1.  Run `ocm create cluster -h` and confirm that your `ocm` version lists the `--exclude-namespace-selector` flag.
1.  Build your `ocm create cluster` command with the required parameters for your cloud provider and subscription model.

    The following example shows only the ingress-related fragment. Replace the rest of the flags with the values required for your environment.
    ```terminal
    $ ocm create cluster <cluster_name> \
      --provider=<aws_or_gcp> \
      <other_required_flags> \
      --default-ingress-excluded-namespace-selectors '<key>=<value>,<key2>=<value2>'
    ```

    where:

    `<cluster_name>`
    :   Specifies the cluster name.


`--provider=<aws_or_gcp>`
:   Specifies the cloud provider.


`<other_required_flags>`
:   Required parameters such as region, version, Customer Cloud Subscription (CCS) settings, or billing flags, as described in the cluster creation documentation for your platform.


`--default-ingress-excluded-namespace-selectors`
:   Specifies label selectors that exclude matching namespaces from the default application ingress. The service validates these exclusions. Replace `<key>=<value>` with your labels. Do not include spaces around the `=` sign.

**Verification**

*   After the cluster reaches `ready` state, confirm ingress settings and inspect the default ingress object for the configured exclusion data.
    ```terminal
    $ ocm list ingress -c <cluster_name>
    ```