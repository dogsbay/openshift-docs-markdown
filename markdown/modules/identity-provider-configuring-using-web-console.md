{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring identity providers using the web console {id="identity-provider-configuring-using-the-web-console_{{ context }}"}

You can configure identity providers on your {{ product_title }} cluster through the web console by updating the **OAuth** settings in the **Cluster Settings**. {._abstract}

**Prerequisites**

*   You are logged in to the web console as a cluster administrator.

**Procedure**

1.  Navigate to **Administration** → **Cluster Settings**.
1.  Under the **Configuration** tab, click **OAuth**.
1.  Under the **Identity Providers** section, select your identity provider from the **Add** drop-down list.

    :::note

    You can specify multiple identity providers through the web console without overwriting existing identity providers.
    
    :::