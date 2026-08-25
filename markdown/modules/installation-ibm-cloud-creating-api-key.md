{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an API key {id="installation-ibm-cloud-creating-api-key_{{ context }}"}

You must create a user API key or a service ID API key for your {{ ibm_cloud_name }} account. {._abstract}

**Prerequisites**

*   You have assigned the required access policies to your {{ ibm_cloud_name }} account.
*   You have attached your IAM access policies to an access group, or other appropriate resource.

**Procedure**

*   Create an API key, depending on how you defined your IAM access policies.

    For example, if you assigned your access policies to a user, you must create a user API key. If you assigned your access policies to a service ID, you must create a service ID API key. If your access policies are assigned to an access group, you can use either API key type. For more information on {{ ibm_cloud_name }} API keys, see "User API key", "Service ID API key", and "Understanding API keys".

**Additional resources**
{._additional-resources}

*   [User API key ({{ ibm_cloud_name }} documentation)](https://cloud.ibm.com/docs/account?topic=account-userapikey)
*   [Service ID API key ({{ ibm_cloud_name }} documentation)](https://cloud.ibm.com/docs/account?topic=account-serviceidapikeys)
*   [Understanding API keys ({{ ibm_cloud_name }} documentation)](https://cloud.ibm.com/docs/account?topic=account-manapikey&interface=ui)