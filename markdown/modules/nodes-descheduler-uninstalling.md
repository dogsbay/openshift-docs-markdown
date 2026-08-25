{%- set _mod_docs_content_type = "PROCEDURE" %}
# Uninstalling the descheduler {id="nodes-descheduler-uninstalling_{{ context }}"}

If you no longer need the descheduler in your cluster, you can remove it by deleting the descheduler instance and uninstalling the {{ descheduler_operator }}. You can also delete the `KubeDescheduler` CRD and `openshift-kube-descheduler-operator` namespace. {._abstract}

**Prerequisites**

{% if not (openshift_rosa or openshift_dedicated) %}
*   You are logged in to {{ product_title }} as a user with the `cluster-admin` role.
{% endif %}
{% if openshift_rosa or openshift_dedicated %}
*   You are logged in to {{ product_title }} as a user with the `dedicated-admin` role.
{%- endif %}
*   Access to the {{ product_title }} web console.

**Procedure**

1.  Log in to the {{ product_title }} web console.
1.  Delete the descheduler instance.
    1.  From the **Ecosystem** -> **Installed Operators** page, click **{{ descheduler_operator }}**.
    1.  Select the **Kube Descheduler** tab.
    1.  Click the Options menu {{ kebab }} next to the **cluster** entry and select **Delete KubeDescheduler**.
    1.  In the confirmation dialog, click **Delete**.
1.  Uninstall the {{ descheduler_operator }}.
    1.  Navigate to **Ecosystem** -> **Installed Operators**.
    1.  Click the Options menu {{ kebab }} next to the **{{ descheduler_operator }}** entry and select **Uninstall Operator**.
    1.  In the confirmation dialog, click **Uninstall**.
1.  Delete the `openshift-kube-descheduler-operator` namespace.
    1.  Navigate to **Administration** -> **Namespaces**.
    1.  Enter `openshift-kube-descheduler-operator` into the filter box.
    1.  Click the Options menu {{ kebab }} next to the **openshift-kube-descheduler-operator** entry and select **Delete Namespace**.
    1.  In the confirmation dialog, enter `openshift-kube-descheduler-operator` and click **Delete**.
1.  Delete the `KubeDescheduler` CRD.
    1.  Navigate to **Administration** -> **Custom Resource Definitions**.
    1.  Enter `KubeDescheduler` into the filter box.
    1.  Click the Options menu {{ kebab }} next to the **KubeDescheduler** entry and select **Delete CustomResourceDefinition**.
    1.  In the confirmation dialog, click **Delete**.