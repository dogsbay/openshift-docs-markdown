{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a {{ SMProductShortName }} control plane for federation {id="ossm-federation-config-smcp_{{ context }}"}

Before a mesh can be federated, you must configure the `ServiceMeshControlPlane` for mesh federation. Because all meshes that are members of the federation are equal, and each mesh is managed independently, you must configure the SMCP for _each_ mesh that will participate in the federation.

In the following example, the administrator for the `red-mesh` is configuring the SMCP for federation with both the `green-mesh` and the `blue-mesh`.

{% if not (openshift_rosa or openshift_rosa_hcp or openshift_dedicated) %}
```yaml title="Sample SMCP for red-mesh" {minja}
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
metadata:
  name: red-mesh
  namespace: red-mesh-system
spec:
  version: v{{ MaistraVersion }}
  runtime:
    defaults:
      container:
        imagePullPolicy: Always
  gateways:
    additionalEgress:
      egress-green-mesh:
        enabled: true
        requestedNetworkView:
        - green-network
        service:
          metadata:
            labels:
              federation.maistra.io/egress-for: egress-green-mesh
          ports:
          - port: 15443
            name: tls
          - port: 8188
            name: http-discovery  #note HTTP here
      egress-blue-mesh:
        enabled: true
        requestedNetworkView:
        - blue-network
        service:
          metadata:
            labels:
              federation.maistra.io/egress-for: egress-blue-mesh
          ports:
          - port: 15443
            name: tls
          - port: 8188
            name: http-discovery  #note HTTP here
    additionalIngress:
      ingress-green-mesh:
        enabled: true
        service:
          type: LoadBalancer
          metadata:
            labels:
              federation.maistra.io/ingress-for: ingress-green-mesh
          ports:
          - port: 15443
            name: tls
          - port: 8188
            name: https-discovery  #note HTTPS here
      ingress-blue-mesh:
        enabled: true
        service:
          type: LoadBalancer
          metadata:
            labels:
              federation.maistra.io/ingress-for: ingress-blue-mesh
          ports:
          - port: 15443
            name: tls
          - port: 8188
            name: https-discovery  #note HTTPS here
  security:
    trust:
      domain: red-mesh.local
```
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp or openshift_dedicated %}
```yaml title="Sample SMCP for red-mesh" {minja}
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
metadata:
  name: red-mesh
  namespace: red-mesh-system
spec:
  version: v{{ MaistraVersion }}
  runtime:
    defaults:
      container:
        imagePullPolicy: Always
  gateways:
    additionalEgress:
      egress-green-mesh:
        enabled: true
        requestedNetworkView:
        - green-network
        routerMode: sni-dnat
        service:
          metadata:
            labels:
              federation.maistra.io/egress-for: egress-green-mesh
          ports:
          - port: 15443
            name: tls
          - port: 8188
            name: http-discovery  #note HTTP here
      egress-blue-mesh:
        enabled: true
        requestedNetworkView:
        - blue-network
        routerMode: sni-dnat
        service:
          metadata:
            labels:
              federation.maistra.io/egress-for: egress-blue-mesh
          ports:
          - port: 15443
            name: tls
          - port: 8188
            name: http-discovery  #note HTTP here
    additionalIngress:
      ingress-green-mesh:
        enabled: true
        routerMode: sni-dnat
        service:
          type: LoadBalancer
          metadata:
            labels:
              federation.maistra.io/ingress-for: ingress-green-mesh
          ports:
          - port: 15443
            name: tls
          - port: 8188
            name: https-discovery  #note HTTPS here
      ingress-blue-mesh:
        enabled: true
        routerMode: sni-dnat
        service:
          type: LoadBalancer
          metadata:
            labels:
              federation.maistra.io/ingress-for: ingress-blue-mesh
          ports:
          - port: 15443
            name: tls
          - port: 8188
            name: https-discovery  #note HTTPS here
  security:
    identity:
      type: ThirdParty
    trust:
      domain: red-mesh.local
```
{% endif %}

**ServiceMeshControlPlane federation configuration parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
  <td>Default value</td>
</tr>
<tr>
  <td>spec: cluster: name:</td>
  <td>Name of the cluster. You are not required to specify a cluster name, but it is helpful for troubleshooting.</td>
  <td>String</td>
  <td>N/A</td>
</tr>
<tr>
  <td>spec: cluster: network:</td>
  <td>Name of the cluster network. You are not required to specify a name for the network, but it is helpful for configuration and troubleshooting.</td>
  <td>String</td>
  <td>N/A</td>
</tr>
</tbody>
</table>

## Understanding federation gateways {id="_understanding_federation_gateways"}

You use a **gateway** to manage inbound and outbound traffic for your mesh, letting you specify which traffic you want to enter or leave the mesh.

You use ingress and egress gateways to manage traffic entering and leaving the service mesh (North-South traffic). When you create a federated mesh, you create additional ingress/egress gateways, to facilitate service discovery between federated meshes, communication between federated meshes, and to manage traffic flow between service meshes (East-West traffic).

To avoid naming conflicts between meshes, you must create separate egress and ingress gateways for each mesh. For example, `red-mesh` would have separate egress gateways for traffic going to `green-mesh` and `blue-mesh`.

**Federation gateway parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
  <td>Default value</td>
</tr>
<tr>
  <td>spec: gateways: additionalEgress: <egress_name>:</td>
  <td>Define an additional egress gateway for <em>each</em> mesh peer in the federation.</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>spec: gateways: additionalEgress: <egress_name>: enabled:</td>
  <td>This parameter enables or disables the federation egress.</td>
  <td><code>true</code>/<code>false</code></td>
  <td><code>true</code></td>
</tr>
<tr>
  <td>spec: gateways: additionalEgress: <egress_name>: requestedNetworkView:</td>
  <td>Networks associated with exported services.</td>
  <td>Set to the value of <code>spec.cluster.network</code> in the SMCP for the mesh, otherwise use <ServiceMeshPeer-name>-network. For example, if the <code>ServiceMeshPeer</code> resource for that mesh is named <code>west</code>, then the network would be named <code>west-network</code>.</td>
  <td></td>
</tr>
<tr>
  <td>spec: gateways: additionalEgress: <egress_name>: service: metadata: labels: federation.maistra.io/egress-for:</td>
  <td>Specify a unique label for the gateway to prevent federated traffic from flowing through the cluster's default system gateways.</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>spec: gateways: additionalEgress: <egress_name>: service: ports:</td>
  <td>Used to specify the <code>port:</code> and <code>name:</code> used for TLS and service discovery. Federation traffic consists of raw encrypted TCP for service traffic.</td>
  <td>Port <code>15443</code> is required for sending TLS service requests to other meshes in the federation. Port <code>8188</code> is required for sending service discovery requests to other meshes in the federation.</td>
  <td></td>
</tr>
<tr>
  <td>spec: gateways: additionalIngress:</td>
  <td>Define an additional ingress gateway gateway for <em>each</em> mesh peer in the federation.</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>spec: gateways: additionalIgress: <ingress_name>: enabled:</td>
  <td>This parameter enables or disables the federation ingress.</td>
  <td><code>true</code>/<code>false</code></td>
  <td><code>true</code></td>
</tr>
<tr>
  <td>spec: gateways: additionalIngress: <ingress_name>: service: type:</td>
  <td>The ingress gateway service must be exposed through a load balancer that operates at Layer 4 of the OSI model and is publicly available.</td>
  <td><code>LoadBalancer</code></td>
  <td></td>
</tr>
<tr>
  <td>spec: gateways: additionalIngress: <ingress_name>: service: type:</td>
  <td>If the cluster does not support <code>LoadBalancer</code> services, the ingress gateway service can be exposed through a <code>NodePort</code> service.</td>
  <td><code>NodePort</code></td>
  <td></td>
</tr>
<tr>
  <td>spec: gateways: additionalIngress: <ingress_name>: service: metadata: labels: federation.maistra.io/ingress-for:</td>
  <td>Specify a unique label for the gateway to prevent federated traffic from flowing through the cluster's default system gateways.</td>
  <td></td>
  <td></td>
</tr>
<tr>
  <td>spec: gateways: additionalIngress: <ingress_name>: service: ports:</td>
  <td>Used to specify the <code>port:</code> and <code>name:</code> used for TLS and service discovery. Federation traffic consists of raw encrypted TCP for service traffic. Federation traffic consists of HTTPS for discovery.</td>
  <td>Port <code>15443</code> is required for receiving TLS service requests to other meshes in the federation. Port <code>8188</code> is required for receiving service discovery requests to other meshes in the federation.</td>
  <td></td>
</tr>
<tr>
  <td>spec: gateways: additionalIngress: <ingress_name>: service: ports: nodePort:</td>
  <td>Used to specify the <code>nodePort:</code> if the cluster does not support <code>LoadBalancer</code> services.</td>
  <td>If specified, is required in addition to <code>port:</code> and <code>name:</code> for both TLS and service discovery. <code>nodePort:</code> must be in the range  <code>30000</code>-<code>32767</code>.</td>
  <td></td>
</tr>
</tbody>
</table>

In the following example, the administrator is configuring the SMCP for federation with  the `green-mesh` using a `NodePort` service.

```yaml title="Sample SMCP for NodePort"
apiVersion: maistra.io/v2
kind: ServiceMeshControlPlane
metadata:
  name: green-mesh
  namespace: green-mesh-system
spec:
# ...
  gateways:
     additionalIngress:
      ingress-green-mesh:
        enabled: true
        service:
          type: NodePort
          metadata:
            labels:
              federation.maistra.io/ingress-for: ingress-green-mesh
          ports:
          - port: 15443
            nodePort: 30510
            name: tls
          - port: 8188
            nodePort: 32359
            name: https-discovery
```

## Understanding federation trust domain parameters {id="_understanding_federation_trust_domain_parameters"}

Each mesh in the federation must have its own unique trust domain. This value is used when configuring mesh federation in the `ServiceMeshPeer` resource.

```yaml
kind: ServiceMeshControlPlane
metadata:
  name: red-mesh
  namespace: red-mesh-system
spec:
  security:
    trust:
      domain: red-mesh.local
```

**Federation security parameters**

<table>
<tbody>
<tr>
  <td>Parameter</td>
  <td>Description</td>
  <td>Values</td>
  <td>Default value</td>
</tr>
<tr>
  <td>spec: security: trust: domain:</td>
  <td>Used to specify a unique name for the trust domain for the mesh. Domains must be unique for every mesh in the federation.</td>
  <td><code>&lt;mesh-name&gt;.local</code></td>
  <td>N/A</td>
</tr>
</tbody>
</table>

**Procedure from the Console**

Follow this procedure to edit the `ServiceMeshControlPlane` with the {{ product_title }} web console. This example uses the `red-mesh` as an example.

1.  Log in to the {{ product_title }} web console as a user with the cluster-admin role.
1.  Navigate to **Ecosystem** → **Installed Operators**.
1.  Click the **Project** menu and select the project where you installed the {{ SMProductShortName }} control plane. For example, `red-mesh-system`.
1.  Click the {{ SMProductName }} Operator.
1.  On the **Istio Service Mesh Control Plane** tab, click the name of your `ServiceMeshControlPlane`, for example `red-mesh`.
1.  On the **Create ServiceMeshControlPlane Details** page, click `YAML` to modify your configuration.
1.  Modify your `ServiceMeshControlPlane` to add federation ingress and egress gateways and to specify the trust domain.
1.  Click **Save**.

**Procedure from the CLI**

Follow this procedure to create or edit the `ServiceMeshControlPlane` with the command line. This example uses the `red-mesh` as an example.

1.  Log in to the {{ product_title }} CLI as a user with the `cluster-admin` role. Enter the following command. Then, enter your username and password when prompted.
    ```terminal
    $ oc login --username=<NAMEOFUSER> https://<HOSTNAME>:6443
    ```
1.  Change to the project where you installed the {{ SMProductShortName }} control plane, for example red-mesh-system.
    ```terminal
    $ oc project red-mesh-system
    ```
1.  Edit the `ServiceMeshControlPlane` file to add federation ingress and egress gateways and to specify the trust domain.
1.  Run the following command to edit the {{ SMProductShortName }} control plane where `red-mesh-system` is the system namespace and `red-mesh` is the name of the `ServiceMeshControlPlane` object:
    ```terminal
    $ oc edit -n red-mesh-system smcp red-mesh
    ```
1.  Enter the following command, where `red-mesh-system` is the system namespace, to see the status of the {{ SMProductShortName }} control plane installation.
    ```terminal
    $ oc get smcp -n red-mesh-system
    ```

    The installation has finished successfully when the READY column indicates that all components are ready.
    ```
    NAME       READY   STATUS            PROFILES      VERSION   AGE
    red-mesh   10/10   ComponentsReady   ["default"]   2.1.0     4m25s
    ```