{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the Operators {id="ossm-install-ossm-operator_{{ context }}"}

To install {{ SMProductName }}, you must install the {{ SMProductName }} Operator. Repeat the procedure for each additional Operator you want to install.

Additional Operators include:

*   {{ KialiProduct }}
*   {{ TempoOperator }}

Deprecated additional Operators include:


:::important

Starting with {{ SMProductName }} 2.5, {{ JaegerName }} and {{ es_op }} are deprecated and will be removed in a future release. Red&#160;Hat will provide bug fixes and support for these features during the current release lifecycle, but this feature will no longer receive enhancements and will be removed. As an alternative to {{ JaegerName }}, you can use {{ TempoName }} instead.

:::


*   {{ JaegerName }}
*   {{ es_op }}


:::note

If you have already installed the {{ es_op }} as part of OpenShift {{ logging_uc }}, you do not need to install the {{ es_op }} again. The {{ JaegerName }} Operator creates the Elasticsearch instance using the installed {{ es_op }}.

:::


**Procedure**

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
1.  Log in to the {{ product_title }} web console as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
1.  Log in to the {{ product_title }} web console as a user with the `dedicated-admin` role.
{% endif %}
1.  In the {{ product_title }} web console, click **Ecosystem** → **Software Catalog**.
1.  Type the name of the Operator into the filter box and select the Red Hat version of the Operator. Community versions of the Operators are not supported.
1.  Click **Install**.
1.  On the **Install Operator** page for each Operator, accept  the default settings.
1.  Click **Install**. Wait until the Operator installs before repeating the steps for the next Operator you want to install.
    *   The {{ SMProductName }} Operator installs in the `openshift-operators` namespace and is available for all namespaces in the cluster.
    *   The {{ KialiProduct }} installs in the `openshift-operators` namespace and is available for all namespaces in the cluster.
    *   The {{ TempoOperator }} installs in the `openshift-tempo-operator` namespace and is available for all namespaces in the cluster.
    *   The {{ JaegerName }} installs in the `openshift-distributed-tracing` namespace and is available for all namespaces in the cluster.

        :::important

        Starting with {{ SMProductName }} 2.5, {{ JaegerName }} is deprecated and will be removed in a future release. Red&#160;Hat will provide bug fixes and support for this feature during the current release lifecycle, but this feature will no longer receive enhancements and will be removed. As an alternative to {{ JaegerName }}, you can use {{ TempoName }} instead.
        
        :::

    *   The {{ es_op }} installs in the `openshift-operators-redhat` namespace and is available for all namespaces in the cluster.

        :::important

        Starting with {{ SMProductName }} 2.5, {{ es_op }} is deprecated and will be removed in a future release. Red&#160;Hat will provide bug fixes and support for this feature during the current release lifecycle, but this feature will no longer receive enhancements and will be removed.
        
        :::


**Verification**

*   After all you have installed all four Operators, click **Ecosystem** → **Installed Operators** to verify that your Operators are installed.