{%- set _mod_docs_content_type = "REFERENCE" %}
# Reference of security context constraints commands {id="security-context-constraints-command-reference_{{ context }}"}

You can manage security context constraints (SCCs) in your instance as normal API objects by using the OpenShift CLI (`oc`). {._abstract}

{% if openshift_enterprise or openshift_webscale or openshift_origin %}

:::note

You must have `cluster-admin` privileges to manage SCCs.

:::


{% endif %}

## Listing security context constraints {id="listing-security-context-constraints_{{ context }}"}

To get a current list of SCCs:

```terminal
$ oc get scc
```

```terminal title="Example output"
NAME                              PRIV    CAPS                   SELINUX     RUNASUSER          FSGROUP     SUPGROUP    PRIORITY     READONLYROOTFS   VOLUMES
anyuid                            false   <no value>             MustRunAs   RunAsAny           RunAsAny    RunAsAny    10           false            ["configMap","downwardAPI","emptyDir","persistentVolumeClaim","projected","secret"]
hostaccess                        false   <no value>             MustRunAs   MustRunAsRange     MustRunAs   RunAsAny    <no value>   false            ["configMap","downwardAPI","emptyDir","hostPath","persistentVolumeClaim","projected","secret"]
hostmount-anyuid                  false   <no value>             MustRunAs   RunAsAny           RunAsAny    RunAsAny    <no value>   false            ["configMap","downwardAPI","emptyDir","hostPath","nfs","persistentVolumeClaim","projected","secret"]
hostnetwork                       false   <no value>             MustRunAs   MustRunAsRange     MustRunAs   MustRunAs   <no value>   false            ["configMap","downwardAPI","emptyDir","persistentVolumeClaim","projected","secret"]
hostnetwork-v2                    false   ["NET_BIND_SERVICE"]   MustRunAs   MustRunAsRange     MustRunAs   MustRunAs   <no value>   false            ["configMap","downwardAPI","emptyDir","persistentVolumeClaim","projected","secret"]
node-exporter                     true    <no value>             RunAsAny    RunAsAny           RunAsAny    RunAsAny    <no value>   false            ["*"]
nonroot                           false   <no value>             MustRunAs   MustRunAsNonRoot   RunAsAny    RunAsAny    <no value>   false            ["configMap","downwardAPI","emptyDir","persistentVolumeClaim","projected","secret"]
nonroot-v2                        false   ["NET_BIND_SERVICE"]   MustRunAs   MustRunAsNonRoot   RunAsAny    RunAsAny    <no value>   false            ["configMap","downwardAPI","emptyDir","persistentVolumeClaim","projected","secret"]
privileged                        true    ["*"]                  RunAsAny    RunAsAny           RunAsAny    RunAsAny    <no value>   false            ["*"]
restricted                        false   <no value>             MustRunAs   MustRunAsRange     MustRunAs   RunAsAny    <no value>   false            ["configMap","downwardAPI","emptyDir","persistentVolumeClaim","projected","secret"]
restricted-v2                     false   ["NET_BIND_SERVICE"]   MustRunAs   MustRunAsRange     MustRunAs   RunAsAny    <no value>   false            ["configMap","downwardAPI","emptyDir","persistentVolumeClaim","projected","secret"]
```

## Examining security context constraints {id="examining-a-security-context-constraints-object_{{ context }}"}

You can view information about a particular SCC, including which users, service accounts, and groups the SCC is applied to.

For example, to examine the `restricted` SCC:

```terminal
$ oc describe scc restricted
```

```terminal title="Example output"
Name:                                  restricted
Priority:                              <none>
Access:
  Users:                               <none>
  Groups:                              <none>
Settings:
  Allow Privileged:                    false
  Allow Privilege Escalation:          true
  Default Add Capabilities:            <none>
  Required Drop Capabilities:          KILL,MKNOD,SETUID,SETGID
  Allowed Capabilities:                <none>
  Allowed Seccomp Profiles:            <none>
  Allowed Volume Types:                configMap,downwardAPI,emptyDir,persistentVolumeClaim,projected,secret
  Allowed Flexvolumes:                 <all>
  Allowed Unsafe Sysctls:              <none>
  Forbidden Sysctls:                   <none>
  Allow Host Network:                  false
  Allow Host Ports:                    false
  Allow Host PID:                      false
  Allow Host IPC:                      false
  Read Only Root Filesystem:           false
  Run As User Strategy: MustRunAsRange
    UID:                               <none>
    UID Range Min:                     <none>
    UID Range Max:                     <none>
  SELinux Context Strategy: MustRunAs
    User:                              <none>
    Role:                              <none>
    Type:                              <none>
    Level:                             <none>
  FSGroup Strategy: MustRunAs
    Ranges:                            <none>
  Supplemental Groups Strategy: RunAsAny
    Ranges:                            <none>
```


where

`Users`
:   Lists which users and service accounts the SCC is applied to.

`Groups`
:   Lists which groups the SCC is applied to.

{% if openshift_enterprise or openshift_webscale or openshift_origin %}

:::note

To preserve customized SCCs during upgrades, do not edit settings on
the default SCCs.

:::


## Updating security context constraints {id="updating-security-context-constraints_{{ context }}"}

If your custom SCC no longer satisfies your application workloads requirements, you can update your SCC by using the OpenShift CLI (`oc`).

To update an existing SCC:

```terminal
$ oc edit scc <scc_name>
```


:::important

To preserve customized SCCs during upgrades, do not edit settings on
the default SCCs.

:::


## Deleting security context constraints {id="deleting-security-context-constraints_{{ context }}"}

If you no longer require your custom SCC, you can delete the SCC by using the OpenShift CLI (`oc`).

To delete an SCC:

```terminal
$ oc delete scc <scc_name>
```


:::important

Do not delete default SCCs. If you delete a default SCC, it is regenerated by the Cluster Version Operator.

:::

{% endif %}