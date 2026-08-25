{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the OpenShift CLI by using an RPM {id="cli-installing-cli-rpm_{{ context }}"}

For {{ op_system_base_full }}, you can install the {{ oc_first }} as an RPM if you have an active {{ product_title }} subscription on your Red Hat account. {._abstract}


:::important

You must install `oc` for {{ op_system_base }} 9 by downloading the binary. Installing `oc` by using an RPM package is not supported on {{ op_system_base_full }} 9.

:::


**Prerequisites**

*   You must have root or sudo privileges.

**Procedure**

1.  Register with Red Hat Subscription Manager:
    ```terminal
    # subscription-manager register
    ```
1.  Pull the latest subscription data:
    ```terminal
    # subscription-manager refresh
    ```
1.  List the available subscriptions:
    ```terminal
    # subscription-manager list --available --matches '*OpenShift*'
    ```
1.  In the output for the previous command, find the pool ID for
    {%- if not openshift_rosa %}
    an {{ product_title }}
    {%- endif %}
    {%- if openshift_rosa %}
    a ROSA
    {%- endif %}
    subscription and attach the subscription to the registered system:
    ```terminal
    # subscription-manager attach --pool=<pool_id>
    ```
1.  Enable the repositories required by
    {%- if not openshift_rosa %}
    {{ product_title }} {{ product_version }}.
    {%- endif %}
    {%- if openshift_rosa %}
    ROSA.
    {%- endif %}
    ```terminal {minja}
    # subscription-manager repos --enable="rhocp-{{ product_version }}-for-rhel-8-x86_64-rpms"
    ```
1.  Install the `openshift-clients` package:
    ```terminal
    # yum install openshift-clients
    ```

**Verification**

*   Verify your installation by using an `oc` command:
    ```terminal
    $ oc <command>
    ```