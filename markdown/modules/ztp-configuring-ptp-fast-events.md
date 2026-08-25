{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring PTP events that use HTTP transport {id="ztp-configuring-ptp-fast-events_{{ context }}"}

You can configure PTP events that use HTTP transport on managed clusters that you deploy with the {{ ztp_first }} pipeline. {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in as a user with `cluster-admin` privileges.
*   You have created a Git repository where you manage your custom site configuration data.

**Procedure**

1.  Apply the following `{{ policy_gen_cr }}` changes to `{{ policy_prefix }}group-du-3node-ranGen.yaml`, `{{ policy_prefix }}group-du-sno-ranGen.yaml`, or `{{ policy_prefix }}group-du-standard-ranGen.yaml` files according to your requirements:
    1.  In `{{ rangen_yaml_path }}`, add the `PtpOperatorConfig` CR file that configures the transport host:
        ```yaml
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-ztp-configuring-ptp-fast-events.yaml" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-ztp-configuring-ptp-fast-events.yaml" %}
{%- endif %}
        ```

        :::note

        In {{ product_title }} 4.13 or later, you do not need to set the `transportHost` field in the `PtpOperatorConfig` resource when you use HTTP transport with PTP events.
        
        :::

    1.  Configure the `linuxptp` and `phc2sys` for the PTP clock type and interface. For example, add the following YAML into `{{ rangen_yaml_path }}`:
{%- if policy-gen-cr == "PolicyGenTemplate" %}
{% include "./snippets/pgt-ztp-configuring-ptp-fast-events-linuxptp.md" %}
{% endif %}
{% if policy-gen-cr == "PolicyGenerator" %}
{% include "./snippets/pg-ztp-configuring-ptp-fast-events-linuxptp.md" %}
{%- endif %}
1.  Merge any other required changes and files with your custom site repository.
1.  Push the changes to your site configuration repository to deploy PTP fast events to new sites using {{ ztp }}.