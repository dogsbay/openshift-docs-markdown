{%- set _mod_docs_content_type = "PROCEDURE" %}
# Setting up a dedicated namespace {id="bmaas-setting-up-a-dedicated-namespace_{{ context }}"}

To prevent accidental interference between {{ bmaas_first }} workloads and the {{ product_title }} infrastructure, set up a dedicated namespace. Repeat this procedure for every project where you intend to use {{ bmaas_first }}. {._abstract}

**Prerequisites**

*   You have [configured an identify provider](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ product_version }}/html-single/authentication_and_authorization/index#configuring-identity-providers).

**Procedure**

1.  Configure a `bmadmin` user in the identity provider and create a secret in OpenShift:
    1.  Create the `bmadmin` user in the identity provider. For example, if using the `htpasswd` identity provider, run the following command:
        ```terminal
        $ htpasswd -c -B -b ./users_htpasswd <username> <password>
        ```

        &lt;username>
        :   The user name for the identity provider. Replace `<username>` with your preferred user name. This example uses `bmadmin`.

        &lt;password>
        :   The password for the user. Replace `<password>` with a secure password.

    1.  Create a secret in the `openshift-config` namespace to store the identity provider configuration by running the following command:
        ```terminal
        $ oc create secret generic <identity_provider_arguments> -n openshift-config
        ```

        For example, when using the `htpasswd` identity provider, run the following command:
        ```terminal
        $ oc create secret generic htpass-secret --from-file=htpasswd=users_htpasswd -n openshift-config
        ```

        &lt;identity_provider_arguments>
        :   The arguments specific to the identity provider secret. Replace `<identity_provider_arguments>` with the appropriate arguments for your identity provider.

1.  Configure OAuth to use the identity provider:
    1.  Edit the OAuth resource by running the following command:
        ```terminal
        $ oc edit oauth cluster
        ```

        The editor opens and displays the Oauth resource.
    1.  Add the identity provider configuration to the `spec.identityProviders` list:

        **Identity provider configuration examples**

<table>
<thead>
<tr>
  <th>Type</th>
  <th>Example</th>
</tr>
</thead>
<tbody>
<tr>
  <td>htpasswd</td>
  <td><pre># ...&#10;- name: my_bmaas_provider&#10;  mappingMethod: claim&#10;  type: htpasswd&#10;  htpasswd:&#10;    fileData:&#10;      name: &lt;secret&gt;&#10;# ...</pre></td>
</tr>
<tr>
  <td>LDAP</td>
  <td><pre># ...&#10;- name: my_bmaas_provider&#10;  mappingMethod: claim&#10;  type: ldap&#10;  ldap:&#10;    attributes:&#10;      id:&#10;      - dn&#10;      email:&#10;      - mail&#10;      name:&#10;      - cn&#10;      preferredUsername:&#10;      - uid&#10;# ...</pre></td>
</tr>
<tr>
  <td>GitHub</td>
  <td><pre># ...&#10;- name: my_bmaas_provider&#10;  mappingMethod: claim&#10;  type: GitHub&#10;    github:&#10;      ca:&#10;        name: ca-config-map&#10;      clientID: {...}&#10;      clientSecret:&#10;        name: github-secret&#10;      hostname: ...&#10;      organizations:&#10;      - myorganization1&#10;      - myorganization2&#10;      teams:&#10;      - myorganization1/team-a&#10;      - myorganization2/team-b&#10;# ...</pre></td>
</tr>
</tbody>
</table>


        For more information about identify providers, see [Authentication and authorization](https://docs.redhat.com/en/documentation/openshift_container_platform/{{ product_version }}/html-single/authentication_and_authorization/index).
    1.  Save and exit the editor.
1.  Create a `bmadmin` user by running the following command:
    ```terminal
    $ oc create user <username>
    ```

    &lt;username>
    :   The user name. Replace `<username>` with your username. The following examples use `bmadmin` as the username.

1.  Create a dedicated `bmaas` namespace for {{ bmaas_first }} hosts by running the following command:
    ```terminal
    $ oc new-project <namespace>
    ```

    `<namespace>`
    :   Replace &lt;namespace> with the namespace name that you want to use. This example uses `bmaas`.

1.  Assign the `edit` role to the `bmadmin` user in the `bmaas` namespace by running the following command:
    ```terminal
    $ oc adm policy add-role-to-user edit <username> -n bmaas
    ```
1.  Clone the `baremetal-operator` repository to obtain the role-based access control (RBAC) role definitions by running the following command:
    ```terminal {minja}
    $ git clone -b release-{{ product_version }} https://github.com/openshift/baremetal-operator.git
    ```
1.  For each role you want to add, apply the appropriate RBAC role YAML file from the repository by running the following command:
    ```terminal
    $ oc apply -f baremetal-operator/config/base/rbac/<role_filename>.yaml
    ```
1.  Assign the custom RBAC roles to the `bmadmin` user in the `bmaas` namespace by running the following command:
    ```terminal
    $ oc adm policy add-role-to-user <role_name> bmadmin -n bmaas
    ```
1.  Login as the `bmadmin` user by running the following command:
    ```terminal
    $ oc login <api_server_url>:6443
    ```

    `<api_server_url>`
    :   The URL to the Kubernetes API.