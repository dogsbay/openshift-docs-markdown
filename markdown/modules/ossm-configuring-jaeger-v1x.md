{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring Jaeger {id="ossm-configuring-jaeger_{{ context }}"}

When the {{ SMProductShortName }} Operator creates the `ServiceMeshControlPlane` resource it can also create the resources for distributed tracing. {{ SMProductShortName }} uses Jaeger for distributed tracing.

You can specify your Jaeger configuration in either of two ways:

*   Configure Jaeger in the `ServiceMeshControlPlane` resource. There are some limitations with this approach.
*   Configure Jaeger in a custom `Jaeger` resource and then reference that Jaeger instance in the  `ServiceMeshControlPlane` resource. If a Jaeger resource matching the value of `name` exists, the control plane will use the existing installation. This approach lets you fully customize your Jaeger configuration.

The default Jaeger parameters specified in the `ServiceMeshControlPlane` are as follows:

```yaml title="Default all-in-one Jaeger parameters"
apiVersion: maistra.io/v1
kind: ServiceMeshControlPlane
spec:
  version: v1.1
  istio:
    tracing:
      enabled: true
      jaeger:
        template: all-in-one
```

**Jaeger parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
  <td>Default value</td>
</tr>
<tr>
  <td>tracing: enabled:</td>
  <td>This parameter enables/disables installing and deploying tracing by the Service Mesh Operator. Installing Jaeger is enabled by default.  To use an existing Jaeger deployment, set this value to <code>false</code>.</td>
  <td><code>true</code>/<code>false</code></td>
  <td><code>true</code></td>
</tr>
<tr>
  <td>jaeger: template:</td>
  <td>This parameter specifies which Jaeger deployment strategy to use.</td>
  <td><ul><li><code>all-in-one</code>- For development, testing, demonstrations, and proof of concept.</li><li><code>production-elasticsearch</code> - For production use.</li></ul></td>
  <td><code>all-in-one</code></td>
</tr>
</tbody>
</table>


:::note

The default template in the `ServiceMeshControlPlane` resource is the `all-in-one` deployment strategy which uses in-memory storage. For production, the only supported storage option is Elasticsearch, therefore you must configure the `ServiceMeshControlPlane` to request the `production-elasticsearch` template when you deploy {{ SMProductShortName }} within a production environment.

:::


## Configuring Elasticsearch {id="ossm-configuring-jaeger-elasticsearch_{{ context }}"}

The default Jaeger deployment strategy uses the `all-in-one` template so that the installation can be completed using minimal resources.  However, because the `all-in-one` template uses in-memory storage, it is only recommended for development, demo, or testing purposes and should NOT be used for production environments.

If you are deploying {{ SMProductShortName }} and Jaeger in a production environment you must change the template to the `production-elasticsearch` template, which uses Elasticsearch for Jaeger’s storage needs.

Elasticsearch is a memory intensive application. The initial set of nodes specified in the default {{ product_title }} installation may not be large enough to support the Elasticsearch cluster.  You should modify the default Elasticsearch configuration to match your use case and the resources you have requested for your {{ product_title }} installation. You can adjust both the CPU and memory limits for each component by modifying the resources block with valid CPU and memory values. Additional nodes must be added to the  cluster if you want to run with the recommended amount (or more) of memory. Ensure that you do not exceed the resources requested for your {{ product_title }} installation.

```yaml title="Default &quot;production&quot; Jaeger parameters with Elasticsearch"
apiVersion: maistra.io/v1
kind: ServiceMeshControlPlane
spec:
  istio:
    tracing:
    enabled: true
    ingress:
      enabled: true
    jaeger:
      template: production-elasticsearch
      elasticsearch:
        nodeCount: 3
        redundancyPolicy:
        resources:
          requests:
            cpu: "1"
            memory: "16Gi"
          limits:
            cpu: "1"
            memory: "16Gi"
```

**Elasticsearch parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
  <td>Default Value</td>
  <td>Examples</td>
</tr>
<tr>
  <td>tracing: enabled:</td>
  <td>This parameter enables/disables tracing in {{ SMProductShortName }}. Jaeger is installed by default.</td>
  <td><code>true</code>/<code>false</code></td>
  <td><code>true</code></td>
  <td></td>
</tr>
<tr>
  <td>ingress: enabled:</td>
  <td>This parameter enables/disables ingress for Jaeger.</td>
  <td><code>true</code>/<code>false</code></td>
  <td><code>true</code></td>
  <td></td>
</tr>
<tr>
  <td>jaeger: template:</td>
  <td>This parameter specifies which Jaeger deployment strategy to use.</td>
  <td><code>all-in-one</code>/<code>production-elasticsearch</code></td>
  <td><code>all-in-one</code></td>
  <td></td>
</tr>
<tr>
  <td>elasticsearch: nodeCount:</td>
  <td>Number of Elasticsearch nodes to create.</td>
  <td>Integer value.</td>
  <td>1</td>
  <td>Proof of concept = 1,Minimum deployment =3</td>
</tr>
<tr>
  <td>requests: cpu:</td>
  <td>Number of central processing units for requests, based on your environment's configuration.</td>
  <td>Specified in cores or millicores (for example, 200m, 0.5, 1).</td>
  <td>1Gi</td>
  <td>Proof of concept = 500m,Minimum deployment =1</td>
</tr>
<tr>
  <td>requests: memory:</td>
  <td>Available memory for requests, based on your environment's configuration.</td>
  <td>Specified in bytes (for example, 200Ki, 50Mi, 5Gi).</td>
  <td>500m</td>
  <td>Proof of concept = 1Gi,Minimum deployment = 16Gi*</td>
</tr>
<tr>
  <td>limits: cpu:</td>
  <td>Limit on number of central processing units, based on your environment's configuration.</td>
  <td>Specified in cores or millicores (for example, 200m, 0.5, 1).</td>
  <td></td>
  <td>Proof of concept = 500m,Minimum deployment =1</td>
</tr>
<tr>
  <td>limits: memory:</td>
  <td>Available memory limit based on your environment's configuration.</td>
  <td>Specified in bytes (for example, 200Ki, 50Mi, 5Gi).</td>
  <td></td>
  <td>Proof of concept = 1Gi,Minimum deployment = 16Gi*</td>
</tr>
<tr>
  <td></td>
  <td colspan="4">&#42; Each Elasticsearch node can operate with a lower memory setting though this is <strong>not</strong> recommended for production deployments. For production use, you should have no less than 16Gi allocated to each pod by default, but preferably allocate as much as you can, up to 64Gi per pod.</td>
</tr>
</tbody>
</table>

**Procedure**

1.  Log in to the {{ product_title }} web console as a user with the `cluster-admin` role.
1.  Navigate to **Ecosystem** -> **Installed Operators**.
1.  Click the {{ SMProductName }} Operator.
1.  Click the **Istio Service Mesh Control Plane** tab.
1.  Click the name of your control plane file, for example, `basic-install`.
1.  Click the **YAML** tab.
1.  Edit the Jaeger parameters, replacing the default `all-in-one` template with parameters for the `production-elasticsearch` template, modified for your use case.  Ensure that the indentation is correct.
1.  Click **Save**.
1.  Click **Reload**.
{{ product_title }} redeploys Jaeger and creates the Elasticsearch resources based on the specified parameters.