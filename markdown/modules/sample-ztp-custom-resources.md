{%- set _mod_docs_content_type = "CONCEPT" %}
# Sample {{ ztp }} custom resources {id="sample-ztp-custom-resources_{{ context }}"}

You can optionally use {{ ztp_first }} custom resource (CR) objects to install an {{ product_title }} cluster with the Agent-based Installer. {._abstract}

You can customize the following {{ ztp }} custom resources to specify more details about your {{ product_title }} cluster. The following sample {{ ztp }} custom resources are for a single-node cluster.

```yaml title="Example agent-cluster-install.yaml file" {minja}
  apiVersion: extensions.hive.openshift.io/v1beta1
  kind: AgentClusterInstall
  metadata:
    name: test-agent-cluster-install
    namespace: cluster0
  spec:
    clusterDeploymentRef:
      name: ostest
    imageSetRef:
      name: openshift-{{ product_version }}
    networking:
      clusterNetwork:
      - cidr: 10.128.0.0/14
        hostPrefix: 23
      serviceNetwork:
      - 172.30.0.0/16
    provisionRequirements:
      controlPlaneAgents: 1
      workerAgents: 0
    sshPublicKey: <ssh_public_key>
```

```yaml title="Example cluster-deployment.yaml file"
apiVersion: hive.openshift.io/v1
kind: ClusterDeployment
metadata:
  name: ostest
  namespace: cluster0
spec:
  baseDomain: test.metalkube.org
  clusterInstallRef:
    group: extensions.hive.openshift.io
    kind: AgentClusterInstall
    name: test-agent-cluster-install
    version: v1beta1
  clusterName: ostest
  controlPlaneConfig:
    servingCertificates: {}
  platform:
    agentBareMetal: {}
  pullSecretRef:
    name: pull-secret
```

To declaratively bind specific bare-metal hosts to a cluster, use the `bmac.agent-install.openshift.io/cluster-reference` annotation on `BareMetalHost` resources.

```yaml title="Example cluster-image-set.yaml file" {minja}
apiVersion: hive.openshift.io/v1
kind: ClusterImageSet
metadata:
  name: openshift-{{ product_version }}
spec:
  releaseImage: registry.ci.openshift.org/ocp/release:{{ product_version }}.0-0.nightly-2022-06-06-025509
```

```yaml title="Example infra-env.yaml file"
apiVersion: agent-install.openshift.io/v1beta1
kind: InfraEnv
metadata:
  name: myinfraenv
  namespace: cluster0
spec:
  clusterRef:
    name: ostest
    namespace: cluster0
  cpuArchitecture: aarch64
  pullSecretRef:
    name: pull-secret
  sshAuthorizedKey: <ssh_public_key>
  nmStateConfigLabelSelector:
    matchLabels:
      cluster0-nmstate-label-name: cluster0-nmstate-label-value
```

The `clusterRef` field and its child fields (`name` and `namespace`) are optional.
To enable the late-binding workflow, remove the `clusterRef` field and its child fields from the `InfraEnv` CR.
Hosts are then bound to clusters individually by using the `bmac.agent-install.openshift.io/cluster-reference` annotation on `BareMetalHost` resources.

```yaml title="Example nmstateconfig.yaml file"
apiVersion: agent-install.openshift.io/v1beta1
kind: NMStateConfig
metadata:
  name: master-0
  namespace: openshift-machine-api
  labels:
    cluster0-nmstate-label-name: cluster0-nmstate-label-value
spec:
  config:
    interfaces:
      - name: eth0
        type: ethernet
        state: up
        mac-address: 52:54:01:aa:aa:a1
        ipv4:
          enabled: true
          address:
            - ip: 192.168.122.2
              prefix-length: 23
          dhcp: false
    dns-resolver:
      config:
        server:
          - 192.168.122.1
    routes:
      config:
        - destination: 0.0.0.0/0
          next-hop-address: 192.168.122.1
          next-hop-interface: eth0
          table-id: 254
  interfaces:
    - name: "eth0"
      macAddress: 52:54:01:aa:aa:a1
```

```yaml title="Example pull-secret.yaml file"
apiVersion: v1
kind: Secret
type: kubernetes.io/dockerconfigjson
metadata:
  name: pull-secret
  namespace: cluster0
stringData:
  .dockerconfigjson: <pull_secret>
```