{%- set _mod_docs_content_type = "REFERENCE" %}
# Default service accounts {id="service-accounts-default_{{ context }}"}

Your {{ product_title }} cluster contains default service accounts for
cluster management and generates more service accounts for each project.

## Default cluster service accounts {id="default-cluster-service-accounts_{{ context }}"}

Several infrastructure controllers run using service account credentials. The
following service accounts are created in the {{ product_title }} infrastructure
project (`openshift-infra`) at server start, and given the following roles
cluster-wide:

| Service account | Description |
| --- | --- |
| `replication-controller` | Assigned the `system:replication-controller` role |
| `deployment-controller` | Assigned the `system:deployment-controller` role |
| `build-controller` | Assigned the `system:build-controller` role. Additionally, the `build-controller` service account is included in the privileged security context constraint to create privileged build pods. |

## Default project service accounts and roles {id="default-service-accounts-and-roles_{{ context }}"}

Three service accounts are automatically created in each project:

<table>
<thead>
<tr>
  <th>Service account</th>
  <th>Usage</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>builder</code></td>
  <td>Used by build pods. It is given the <code>system:image-builder</code> role, which allowspushing images to any imagestream in the project using the internal Dockerregistry.<br><br><dl><dt>Note</dt><dd>The <code>builder</code> service account is not created if the <code>Build</code> cluster capability is not enabled.</dd></dl></td>
</tr>
<tr>
  <td><code>deployer</code></td>
  <td>Used by deployment pods and given the <code>system:deployer</code> role, which allowsviewing and modifying replication controllers and pods in the project.<br><br><dl><dt>Note</dt><dd>The <code>deployer</code> service account is not created if the <code>DeploymentConfig</code> cluster capability is not enabled.</dd></dl></td>
</tr>
<tr>
  <td><code>default</code></td>
  <td>Used to run all other pods unless they specify a different service account.<br><br><dl><dt>Important</dt><dd>Access rights and security privileges tied to the <code>default</code> service account apply to every pod in the project that does not specify a different service account. To implement the principle of least privilege and improve auditability, create dedicated service accounts for your workloads instead of using the <code>default</code> service account.<br><br>While most {{ product_title }} platform components and Operators use dedicated service accounts, the following dynamic tools continue to use the <code>default</code> service account to ensure operational efficiency:<br><br><ul><li><code>oc debug</code>: Uses the <code>default</code> service account to avoid the performance overhead of creating and removing unique service accounts for short-lived troubleshooting sessions.</li><li><code>oc adm must-gather</code>: Uses the <code>default</code> service account to collect diagnostic data across the cluster without requiring extensive manual RBAC modifications.</li></ul></dd></dl></td>
</tr>
</tbody>
</table>

All service accounts in a project are given the `system:image-puller` role,
which allows pulling images from any image stream in the project using the
internal container image registry.