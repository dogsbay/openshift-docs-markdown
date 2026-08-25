{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a custom SCC for the Compliance Operator {id="compliance-custom-scc_{{ context }}"}

In some environments, you must create a custom Security Context Constraints (SCC) file to ensure the correct permissions are available to the Compliance Operator `api-resource-collector`. {._abstract}

**Prerequisites**

*   You must have `admin` privileges.

**Procedure**

1.  Define the SCC in a YAML file named `restricted-adjusted-compliance.yaml`:
    ```yaml title="SecurityContextConstraints object definition"
      allowHostDirVolumePlugin: false
      allowHostIPC: false
      allowHostNetwork: false
      allowHostPID: false
      allowHostPorts: false
      allowPrivilegeEscalation: true
      allowPrivilegedContainer: false
      allowedCapabilities: null
      apiVersion: security.openshift.io/v1
      defaultAddCapabilities: null
      fsGroup:
        type: MustRunAs
      kind: SecurityContextConstraints
      metadata:
        name: restricted-adjusted-compliance
      priority: 30
      readOnlyRootFilesystem: false
      requiredDropCapabilities:
      - KILL
      - SETUID
      - SETGID
      - MKNOD
      runAsUser:
        type: MustRunAsRange
      seLinuxContext:
        type: MustRunAs
      supplementalGroups:
        type: RunAsAny
      users:
      - system:serviceaccount:openshift-compliance:api-resource-collector
      volumes:
      - configMap
      - downwardAPI
      - emptyDir
      - persistentVolumeClaim
      - projected
      - secret
    ```

    where:

    `priority`
    :   Specifies the priority of this SCC. This value must be higher than any other SCC that applies to the `system:authenticated` group.

    `system:serviceaccount:openshift-compliance:api-resource-collector`
    :   Specifies the Service Account used by Compliance Operator Scanner pod.

1.  Create the SCC:
    ```terminal
    $ oc create -n openshift-compliance  -f restricted-adjusted-compliance.yaml
    ```
    ```terminal title="Example output"
    securitycontextconstraints.security.openshift.io/restricted-adjusted-compliance created
    ```

**Verification**

1.  Verify the SCC was created:
    ```terminal
    $ oc get -n openshift-compliance scc restricted-adjusted-compliance
    ```
    ```terminal title="Example output"
    NAME                             PRIV    CAPS         SELINUX     RUNASUSER        FSGROUP     SUPGROUP   PRIORITY   READONLYROOTFS   VOLUMES
    restricted-adjusted-compliance   false   <no value>   MustRunAs   MustRunAsRange   MustRunAs   RunAsAny   30         false            ["configMap","downwardAPI","emptyDir","persistentVolumeClaim","projected","secret"]
    ```