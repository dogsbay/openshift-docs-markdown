{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling {{ insights_operator }} data obfuscation {id="insights-operator-enable-obfuscation_{{ context }}"}

You can enable obfuscation to mask sensitive and identifiable IPv4 addresses and cluster base domains that the {{ insights_operator }} sends to [console.redhat.com](https://console.redhat.com). {._abstract}


:::warning

Although this feature is available, Red Hat recommends keeping obfuscation disabled for a more effective support experience.

:::


Obfuscation assigns non-identifying values to cluster IPv4 addresses, and uses a translation table that is retained in memory to change IP addresses to their obfuscated versions throughout the {{ insights_operator }} archive before uploading the data to [console.redhat.com](https://console.redhat.com).

For cluster base domains, obfuscation changes the base domain to a hardcoded substring. For example, `cluster-api.openshift.example.com` becomes `cluster-api.<CLUSTER_BASE_DOMAIN>`.

The following procedure enables obfuscation using the `support` secret in the `openshift-config` namespace.

**Prerequisites**

*   You are logged in to the {{ product_title }} web console as `cluster-admin`.

**Procedure**

1.  Navigate to **Workloads** -> **Secrets**.
1.  Select the **openshift-config** project.
1.  Search for the **support** secret using the **Search by name** field. If it does not exist, click **Create** -> **Key/value secret** to create it.
1.  Click the Options menu {{ kebab }}, and then click **Edit Secret**.
1.  Click **Add Key/Value**.
1.  Create a key named `enableGlobalObfuscation` with a value of `true`, and click **Save**.
1.  Navigate to **Workloads** -> **Pods**
1.  Select the `openshift-insights` project.
1.  Find the `insights-operator` pod.
1.  To restart the `insights-operator` pod, click the Options menu {{ kebab }}, and then click **Delete Pod**.

**Verification**

1.  Navigate to **Workloads** -> **Secrets**.
1.  Select the **openshift-insights** project.
1.  Search for the **obfuscation-translation-table** secret using the **Search by name** field.

    If the `obfuscation-translation-table` secret exists, then obfuscation is enabled and working.

    Alternatively, you can inspect `/insights-operator/gathers.json` in your {{ insights_operator }} archive for the value `"is_global_obfuscation_enabled": true`.