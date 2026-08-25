---
title: Autoscale APIs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Autoscale APIs {id="autoscale-apis"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}

## ClusterAutoscaler [autoscaling.openshift.io/v1] {id="_clusterautoscaler_autoscalingopenshiftiov1"}


Description
:   ClusterAutoscaler is the Schema for the clusterautoscalers API


Type
:     `object`

## MachineAutoscaler [autoscaling.openshift.io/v1beta1] {id="_machineautoscaler_autoscalingopenshiftiov1beta1"}


Description
:   MachineAutoscaler is the Schema for the machineautoscalers API


Type
:     `object`

## HorizontalPodAutoscaler [autoscaling/v2] {id="_horizontalpodautoscaler_autoscalingv2"}


Description
:   HorizontalPodAutoscaler is the configuration for a horizontal pod autoscaler, which automatically manages the replica count of any resource implementing the scale subresource based on the metrics specified.


Type
:     `object`

## Scale [autoscaling/v1] {id="_scale_autoscalingv1"}


Description
:   Scale represents a scaling request for a resource.


Type
:     `object`