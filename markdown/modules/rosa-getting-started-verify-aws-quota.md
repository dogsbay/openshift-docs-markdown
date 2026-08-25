{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying AWS quota availability {id="rosa-getting-started-verify-aws-quota_{{ context }}"}

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}

Verify that the required resource quotas are available for your account in the default AWS region.

{% if getting_started %}

**Prerequisites**

*   You have an AWS account.
*   You installed and configured the latest AWS (`aws`), ROSA (`rosa`), and OpenShift (`oc`) CLIs on your workstation.
*   You logged in to your Red Hat account by using the `rosa` CLI.
{% endif %}

**Procedure**

1.  Verify if the required resource quotas are available in your default region:
    ```terminal
    $ rosa verify quota
    ```
    ```terminal title="Example output"
    I: Validating AWS quota...
    I: AWS quota ok. If cluster installation fails, validate actual AWS resource usage against https://docs.openshift.com/rosa/rosa_getting_started/rosa-required-aws-service-quotas.html
    ```

{% if context == "rosa-getting-started" %}
{%- set getting_started = true -%}
{% endif %}
{% if context == "rosa-quickstart" %}
{%- set quickstart = true -%}
{% endif %}