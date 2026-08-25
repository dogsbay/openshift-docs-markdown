{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configure groups and Argo CD RBAC {id="configuring-groups-and-argocd-rbac_{{ context }}"}

Role-based access control (RBAC) allows you to provide relevant permissions to users.

**Prerequisites**

*   You have created the `ArgoCDAdmins` group in Keycloak.
*   The user you want to give permissions to has logged in to Argo CD.
 
.Procedure
    1.  In the Keycloak dashboard navigate to **Users** -> **Groups**. Add the user to the Keycloak group `ArgoCDAdmins`. 
    1.  Ensure that `ArgoCDAdmins` group has the required permissions in the `argocd-rbac` config map. 
        *   Edit the config map:  
            ```terminal
            $ oc edit configmap argocd-rbac-cm -n <namespace>
            ```
            ```yaml title="Example of a config map that defines admin permissions. "
            apiVersion: v1
            kind: ConfigMap
            metadata:
              name: argocd-rbac-cm
            data:
              policy.csv: |
                g, /ArgoCDAdmins, role:admin
            ```