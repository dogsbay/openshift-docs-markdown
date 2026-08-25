{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure an LDAP identity provider {id="config-ldap-idp_{{ context }}"}

Configure the LDAP identity provider to validate user names and passwords against an LDAPv3 server, using simple bind authentication. {._abstract}

**Prerequisites**

*   When configuring an LDAP identity provider, you need to enter a configured **LDAP URL**. The configured URL is an RFC 2255 URL, which specifies the LDAP host and search parameters to use. The syntax of the URL is:
    ```
    ldap://host:port/basedn?attribute?scope?filter
    ```
<table>
<thead>
<tr>
  <th>URL component</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td>.^</td>
  <td><code>ldap</code></td>
</tr>
<tr>
  <td>For regular LDAP, use the string <code>ldap</code>. For secure LDAP (LDAPS), use <code>ldaps</code> instead. .^</td>
  <td><code>host:port</code></td>
</tr>
<tr>
  <td>The name and port of the LDAP server. Defaults to <code>localhost:389</code> for ldap and <code>localhost:636</code> for LDAPS. .^</td>
  <td><code>basedn</code></td>
</tr>
<tr>
  <td>The DN of the branch of the directory where all searches should start from. At the very least, this must be the top of your directory tree, but it could also specify a subtree in the directory. .^</td>
  <td><code>attribute</code></td>
</tr>
<tr>
  <td>The attribute to search for. Although RFC 2255 allows a comma-separated list of attributes, only the first attribute is used, no matter how many are provided. If no attributes are provided, the default is to use <code>uid</code>. Choose an attribute that is unique across all entries in the subtree you are using. .^</td>
  <td><code>scope</code></td>
</tr>
<tr>
  <td>The scope of the search. Can be either <code>one</code> or <code>sub</code>. If the scope is not provided, the default is to use a scope of <code>sub</code>. .^</td>
  <td><code>filter</code></td>
</tr>
<tr>
  <td>A valid LDAP search filter. If not provided, defaults to <code>(objectClass=*)</code></td>
</tr>
</tbody>
</table>


    When doing searches, the attribute, filter, and provided user name are combined to create a search filter that looks like:
    ```
    (&(<filter>)(<attribute>=<username>))
    ```

    :::important

    If the LDAP directory requires authentication to search, specify a `bindDN` and
    `bindPassword` to use to perform the entry search.
    
    :::


**Procedure**

1.  From {{ cluster_manager_url }}, navigate to the **Cluster List** page and select the cluster that you need to configure identity providers for.
1.  Click the **Access control** tab.
1.  Click **Add identity provider**.

    :::note

    You can also click the **Add OAuth configuration** link in the warning message displayed after cluster creation to configure your identity providers.
    
    :::

1.  Select **LDAP** from the drop-down menu.
1.  Enter a unique name for the identity provider. This name cannot be changed later.
1.  Select a mapping method from the drop-down menu. **Claim** is recommended in most cases.
1.  Enter a **LDAP URL** to specify the LDAP search parameters to use.
1.  Optional: Enter a **Bind DN** and **Bind password**.
1.  Enter the attributes that will map LDAP attributes to identities.
    *   Enter an **ID** attribute whose value should be used as the user ID. Click **Add more** to add multiple ID attributes.
    *   Optional: Enter a **Preferred username** attribute whose value should be used as the display name. Click **Add more** to add multiple preferred username attributes.
    *   Optional: Enter an **Email** attribute whose value should be used as the email address. Click **Add more** to add multiple email attributes.
1.  Optional: Click **Show advanced options** to add a certificate authority (CA) file to your LDAP identity provider to validate server certificates for the configured URL. Click **Browse** to locate and attach a **CA file** to the identity provider.
1.  Optional: Under the advanced options, you can choose to make the LDAP provider **Insecure**. If you select this option, a CA file cannot be used.

    :::important

    If you are using an insecure LDAP connection (ldap:// or port 389), then you must check the **Insecure** option in the configuration wizard.
    
    :::

1.  Click **Confirm**.

**Verification**

*   The configured identity provider is now visible on the **Access control** tab of the **Cluster List** page.