{%- set _mod_docs_content_type = "REFERENCE" %}

# Red&#160;Hat {{ OCP }} FedRAMP Rev5 Secure Configuration Guidance for top-level administrative and privileged accounts {id="rosa-fedramp-accounts-config_{{ context }}"}

{{ product_title }} gives you comprehensive frameworks to find roles, isolation boundaries, and operational functions for top-level administrative or privileged accounts. These frameworks apply within a Red&#160;Hat {{ OCP }} Federal Risk and Authorization Management Program (FedRAMP) Rev5 Secure Configuration Guidance (SCG) environment. {._abstract}

The guidance you receive addresses the SCG-CSO-RSC (Cloud Service Offering - Recommended Secure Configuration) requirement, including both cluster-wide top-level administrative accounts and namespace-scoped privileged accounts. The parameters in both administrative and privilege accounts help you deploy, operate, decommission, and secure access among your configurations.

For the most up-to-date account features and structural prerequisites, review the official Red&#160;Hat {{ OCP_short }} documentation page for your active deployment service. Your browser must have JavaScript enabled to access and interact with the documentation portal for [Red Hat OpenShift Container Platform](https://docs.redhat.com/en/documentation/openshift_container_platform/4.22). 


:::important

*   To access the cluster for the first time, create a temporary administrative user with the `rosa create admin` command. The command outputs login credentials to your terminal.
*   Copy and store these credentials. The credentials are not automatically saved to the disk.
*   To comply with FedRAMP identity boundaries, use this temporary account primarily to configure enterprise identity providers, then delete the temporary admin user.

:::


For guidance and context on different actions you can take in your top level administrative account, see the following table:


:::note

In {{ product_short }}, you can perform administrative tasks using either the `dedicated-admin` or `cluster-admin` role. Use the `dedicated-admin` role as your preferred choice because it provides administrative permissions for managing namespaces and workloads without potentially disrupting your cluster operations. Since the `cluster-admin` role is the highest level of privilege that you could have, the `cluster-admin` can unintentionally get your cluster into an unsupportable state.

:::


***Actions and benefits for account provisioning and access setup***

<table>
<thead>
<tr>
  <th>Action</th>
  <th>Benefit</th>
  <th>Command</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Grant dedicated-admin privileges</td>
  <td>Grant administrative access to users by adding them to the <code>dedicated-admins</code> group. This provides elevated permissions for managing user namespaces, assigning security context constraints, and configuring identity providers, while control plane management remains with Red Hat SRE.</td>
  <td><code>oc adm groups add-users dedicated-admins <username></code></td>
</tr>
<tr>
  <td>Verify dedicated-admin membership</td>
  <td>Ensure that administrative users are correctly assigned to the <code>dedicated-admins</code> group.</td>
  <td><code>oc get groups dedicated-admins -o yaml</code></td>
</tr>
<tr>
  <td>Configure multifactor authentication (MFA)</td>
  <td>Enforce MFA through the configured identity provider. OpenID Connect and SAML providers support MFA enforcement at the identity provider layer.</td>
  <td>Managed directly at the enterprise Identity Provider (IdP) layer.</td>
</tr>
<tr>
  <td>Configure cluster role-based access control</td>
  <td>Implement least privilege access by creating custom cluster roles with specific permissions within the scope allowed by dedicated-admin privileges. Define custom cluster roles for namespace-scoped resource management.</td>
  <td><code>oc create clusterrole <role_name> --verb=<verbs> --resource=<resources></code></td>
</tr>
<tr>
  <td>Bind custom roles to users</td>
  <td>Ensures your users only have the capabilities that you want them to have.</td>
  <td><code>oc adm policy add-cluster-role-to-user <role_name> <username></code></td>
</tr>
<tr>
  <td>Configure service account</td>
  <td>Create service accounts for automated processes and CI/CD pipelines. Service accounts authenticate using tokens rather than user credentials.</td>
  <td><ul><li>Create service account: <code>oc create serviceaccount <service_account_name> -n <namespace></code></li><li>Grant permissions: <code>oc adm policy add-role-to-user <role> system:serviceaccount:<namespace>:<service_account_name></code></li></ul></td>
</tr>
<tr>
  <td>View assigned projects</td>
  <td>Verify that a privileged namespace administrator has clear visibility into the specific isolated projects they need to manage.</td>
  <td><code>oc get projects</code></td>
</tr>
<tr>
  <td>Assign specialized administrative roles</td>
  <td>Assign users to specialized administrative roles for specific cluster operations. Common roles include <code>cluster-reader</code> (read-only cluster metadata), <code>registry-admin</code> (internal registry control), and <code>storage-admin</code> (persistent volumes). These roles provide targeted permissions without requiring full dedicated-admin group membership.</td>
  <td>Handled through specialized cluster role attachments.</td>
</tr>
<tr>
  <td>Grant namespace administrative roles</td>
  <td>Assign administrative roles to users for specific namespaces. This grants permissions to view/edit all namespace resources, manage secrets, bind local roles, and configure network policies within that project scope.</td>
  <td><code>oc adm policy add-role-to-user admin <username> -n <namespace></code></td>
</tr>
<tr>
  <td>Grant namespace edit roles</td>
  <td>Assign edit capabilities to user roles for direct deployment and workload modification permissions without exposing local role binding control.</td>
  <td><code>oc adm policy add-role-to-user edit <username> -n <namespace></code></td>
</tr>
<tr>
  <td>Grant namespace view roles</td>
  <td>Assign view capabilities for read-only namespace and workload access.</td>
  <td><code>oc adm policy add-role-to-user view <username> -n <namespace></code></td>
</tr>
<tr>
  <td>Create custom namespace roles</td>
  <td>Define local roles with specific permission sets restricted to particular resources and verbs aligned to narrow organizational requirements.</td>
  <td><code>oc create role <role_name> --verb=<get,list,watch> --resource=<pods,services> -n <namespace></code></td>
</tr>
<tr>
  <td>Bind custom roles to namespace users</td>
  <td>Bind custom localized roles to users to guarantee that namespace-scoped personnel only have targeted privileges inside that specific boundary.</td>
  <td><code>oc adm policy add-role-to-user <role_name> <username> -n <namespace></code></td>
</tr>
<tr>
  <td>Grant service account privileges (Namespace)</td>
  <td>Configure service accounts with localized, privileged permissions for automated application workflows, ensuring minimum access needed for operation.</td>
  <td><ul><li>Create service account: <code>oc create sa <service_account_name> -n <namespace></code></li><li>Or grant role: <code>oc adm policy add-role-to-user <role> -z <service_account_name> -n <namespace></code></li></ul></td>
</tr>
<tr>
  <td>Extract service account tokens</td>
  <td>Use localized automated service tokens safely for external system or pipeline authentication actions.</td>
  <td><code>oc create token <service_account_name> -n <namespace></code></td>
</tr>
</tbody>
</table>

For guidance on operating your top level administrative accounts, see the following table: 

***Guidance on operating administrative and privileged accounts***

<table>
<thead>
<tr>
  <th>Action</th>
  <th>Benefit</th>
  <th>Command</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Manage certificates</td>
  <td>Replace default API server certificates with custom certificates issued by an organizational certificate authority. Create a secret containing the certificate and key. Update the API server configuration to reference the custom certificate secret. Certificate rotation occurs automatically when you update the secret with a new certificate.</td>
  <td><code>oc create secret tls <secret_name> --cert=<path/to/cert> --key=<path/to/key> -n openshift-config</code></td>
</tr>
<tr>
  <td>Monitor administrative accounts</td>
  <td>Review cluster events and administrative activities. Query audit logs for specific user activities. Monitor role binding changes indicating privilege escalation attempts.</td>
  <td><code>oc get events --all-namespaces</code></td>
</tr>
<tr>
  <td>Grant namespace administration tasks</td>
  <td>Allow namespace administrators to handle project-scoped operations: deploying workloads, managing secrets, applying resource quotas, defining network restrictions, and binding local access.</td>
  <td>Executed through namespace-scoped <code>oc</code> subcommands.</td>
</tr>
<tr>
  <td>Manage resource quotas</td>
  <td>Configure hard infrastructure resource quotas limiting localized namespace consumption across CPU, memory, storage requests, and PVC limits.</td>
  <td><code>oc create quota <quota_name> --hard=cpu=10,memory=20Gi,persistentvolumeclaims=5 -n <namespace></code></td>
</tr>
<tr>
  <td>View quota usage</td>
  <td>Audit resource allocation to ensure that project bounds are functioning correctly and limits are not exhausted.</td>
  <td><code>oc describe quota -n <namespace></code></td>
</tr>
<tr>
  <td>Configure network policies</td>
  <td>Create namespace-scoped <code>NetworkPolicy</code> objects to control pod-to-pod traffic within your projects. Implement default-deny policies that block all traffic except explicitly allowed connections. Cluster-wide network security is managed by Red Hat SRE.</td>
  <td><code>oc create -f <networkpolicy.yaml> -n <namespace></code></td>
</tr>
<tr>
  <td>Assign security context constraints</td>
  <td>Namespace administrators can assign pre-defined security context constraints (SCCs) to service accounts within their projects. Red Hat SRE manages the global SCC definitions (such as <code>restricted-v2</code> and <code>privileged</code>). Users with dedicated-admin privileges can assign allowed SCCs to their service accounts to grant specific pod security capabilities.</td>
  <td><code>oc adm policy add-scc-to-user <scc_name> -z <service_account_name> -n <namespace></code></td>
</tr>
<tr>
  <td>View SCC assignments</td>
  <td>Verify that global or namespace SCC privileges match accurately to the correct infrastructure components and local service accounts.</td>
  <td><ul><li>Global view: <code>oc get scc</code></li><li>Namespace verification: `oc get scc -o yaml \</li></ul></td>
</tr>
<tr>
  <td>grep -A 5 <service_account_name>`</td>
</tr>
</tbody>
</table>

For guidance on decommissioning your top level administrative accounts, see the following table:

***Guidance on decommissioning your administrative and privileged accounts***

<table>
<thead>
<tr>
  <th>Action</th>
  <th>Benefit</th>
  <th>Command</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Remove user access</td>
  <td>Remove administrative or namespace role assignments from departing personnel to prevent residual access.</td>
  <td><ul><li>Remove dedicated-admin privileges: <code>oc adm groups remove-users dedicated-admins <username></code></li><li>Remove namespace roles: <code>oc adm policy remove-role-from-user <role> <username> -n <namespace></code></li></ul></td>
</tr>
<tr>
  <td>List role bindings</td>
  <td>Run global searches across all cluster and project boundaries to verify the complete, absolute removal of the targeted user's permissions.</td>
  <td>`oc get rolebindings,clusterrolebindings --all-namespaces -o wide \</td>
</tr>
<tr>
  <td>grep <username>`</td>
  <td>Remove identity provider entries</td>
  <td>Clean up the internal cluster user identity mapping registries thoroughly when you skip roles.</td>
</tr>
<tr>
  <td><ul><li>Remove User object: <code>oc delete user <username></code></li><li>Or remove Identity link: <code>oc delete identity <identity_provider_name>:<username></code></li></ul></td>
  <td>Remove service account access</td>
  <td>Permanently delete namespace-scoped automated service accounts that are no longer required for active operations.</td>
</tr>
<tr>
  <td><code>oc delete serviceaccount <service_account_name> -n <namespace></code></td>
  <td>Verify service account deletion</td>
  <td>Auditing step ensures no unlinked automated keys remain active, which effectively blocks associated pods from authenticating unauthorized API calls.</td>
</tr>
<tr>
  <td>Monitored by querying namespace resources post-deletion.</td>
  <td>Transfer resource ownership</td>
  <td>Audit resources created by the departing administrator to transfer ownership. Review projects, security policies, and configurations requiring ownership reassignment to active administrators.</td>
</tr>
<tr>
  <td>Managed through resource metadata modification and project reassignment.</td>
</tr>
</tbody>
</table>

For guidance on security related settings, see the following table:

**Guidance on setting security for your administrative and privileged accounts**

| Action | Benefit | Command |
| --- | --- | --- |
| Install the Compliance Operator | Automate configuration auditing and compliance monitoring. The Compliance Operator scans cluster infrastructure against National Institute of Standards and Technology (NIST) 800-53 controls required for FedRAMP. Create `ComplianceSuite` resources to schedule assessments that detect configuration drift and generate remediation recommendations. Visualize compliance results in the {{ OCP_short }} console or integrate with Red Hat Advanced Cluster Security (RHACS) dashboard for centralized compliance tracking and correlation with security findings. | Handled through OperatorHub, then create `ComplianceSuite` resources targeting FedRAMP profiles, `ocp4-moderate` or `ocp4-high`. View results in {{ OCP_short }} console under `Compliance` or in ACS dashboard. |
| Configure image security | Configure image signature verification enforcing signed container images for deployment. Create `ImageContentSourcePolicy` resources defining trusted registries and integrate external vulnerability scanners. | Applied through global cluster-wide security policies. |
| Set pod security standards | Enforce runtime isolation constraints across namespaces. Restricts pod capabilities regarding host namespaces, root privileges, volume types, and root filesystems to isolate tenant workloads. | Handled through platform admission controllers and namespace labels. |
| Manage secrets from literal values | Namespace administrators create and store sensitive key/value configuration data locally. Secrets are base64 encoded but require cluster-wide etcd encryption to be fully encrypted at rest. | `oc create secret generic <secret_name> --from-literal=key=value -n <namespace>` |
| Manage secrets from files | Generate local secrets using complete files to mount directly into applications as environment variables or secure volume mounts. | `oc create secret generic <secret_name> --from-file=<path/to/file> -n <namespace>` |
| Pull image secrets | Safely store and configure private registry authentication tokens by creating dedicated `docker-registry` credentials within the project. | `oc create secret docker-registry <secret_name> --docker-server=<registry-url> --docker-username=<username> --docker-password=<password>` |
| Link secrets to service accounts | Inject private registry pull credentials directly into namespace service accounts to allow automated image validation and pull authentication. | `oc secrets link <service_account_name> <secret_name> --for=pull -n <namespace>` |
| Manage monitoring and logging access | Namespace administrators access localized application logs and metrics within assigned boundaries, preventing cross-namespace data visibility. | `oc logs <pod-name> -n <namespace>` |
| Review installed operators | Inspect local, namespace-scoped operators running within the project from OperatorHub, verifying their management permissions are constrained strictly to that namespace. | `oc get csv -n <namespace>` |
| View Security Context Constraints (SCCs) | Review available security context constraints that control pod security capabilities. Red Hat SRE manages SCC definitions. The default `restricted-v2` SCC applies to pods without explicit SCC specification. The `privileged` SCC grants host-level access and is restricted to Red Hat-managed infrastructure components. Namespace administrators can assign pre-defined SCCs to their service accounts. | `oc get scc` |
| Define network policies | Create namespace-scoped `NetworkPolicy` resources to control pod-to-pod communication and external access within your projects. Implement default-deny policies requiring explicit allow rules for permitted traffic. Cluster-wide network security is managed by Red Hat SRE. | `oc create -f <networkpolicy.yaml> -n <namespace>` |