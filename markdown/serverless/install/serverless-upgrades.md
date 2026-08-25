{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Serverless upgrades {id="serverless-upgrades"}
{%- set context = "serverless-upgrades" %}

{{ ServerlessProductName }} should be upgraded without skipping release versions. This section shows how to resolve problems with upgrading.

{% leveloffset +1 %}{% include "./modules/serverless-resolving-operator-upgrade-failure.md" %}{% endleveloffset %}

**Additional resources**
{._additional-resources}

*   [{{ ServerlessProductName }} Release Notes](/serverless/serverless-release-notes#serverless-tech-preview-features_serverless-release-notes)
*   [Deleting Operators from a cluster using the web console](/serverless/removing/removing-serverless-operator#olm-deleting-operators-from-a-cluster-using-web-console_removing-serverless-operator)
*   [Installing the OpenShift Serverless Operator from the web console](/serverless/install/install-serverless-operator#serverless-install-web-console_install-serverless-operator)