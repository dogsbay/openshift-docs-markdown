---
title: Node APIs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Node APIs {id="node-apis"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}

## Node [v1] {id="_node_v1"}


Description
:   Node is a worker node in Kubernetes. Each node will have a unique identifier in the cache (i.e. in etcd).


Type
:     `object`

## PerformanceProfile [performance.openshift.io/v2] {id="_performanceprofile_performanceopenshiftiov2"}


Description
:   PerformanceProfile is the Schema for the performanceprofiles API


Type
:     `object`

## Profile [tuned.openshift.io/v1] {id="_profile_tunedopenshiftiov1"}


Description
:   Profile is a specification for a Profile resource.


Type
:     `object`

## RuntimeClass [node.k8s.io/v1] {id="_runtimeclass_nodek8siov1"}


Description
:   RuntimeClass defines a class of container runtime supported in the cluster. The RuntimeClass is used to determine which container runtime is used to run all containers in a pod. RuntimeClasses are manually defined by a user or cluster provisioner, and referenced in the PodSpec. The Kubelet is responsible for resolving the RuntimeClassName reference before running the pod.  For more details, see https://kubernetes.io/docs/concepts/containers/runtime-class/


Type
:     `object`

## Tuned [tuned.openshift.io/v1] {id="_tuned_tunedopenshiftiov1"}


Description
:   Tuned is a collection of rules that allows cluster-wide deployment
    of node-level sysctls and more flexibility to add custom tuning
    specified by user needs.  These rules are translated and passed to all
    containerized Tuned daemons running in the cluster in the format that
    the daemons understand. The responsibility for applying the node-level
    tuning then lies with the containerized Tuned daemons. More info:
    https://github.com/openshift/cluster-node-tuning-operator


Type
:     `object`