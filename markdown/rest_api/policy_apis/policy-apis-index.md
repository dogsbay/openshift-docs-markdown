---
title: Policy APIs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# Policy APIs {id="policy-apis"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}

## Eviction [policy/v1] {id="_eviction_policyv1"}


Description
:   Eviction evicts a pod from its node subject to certain policies and safety constraints. This is a subresource of Pod.  A request to cause such an eviction is created by POSTing to .../pods/&lt;pod name>/evictions.


Type
:     `object`

## PodDisruptionBudget [policy/v1] {id="_poddisruptionbudget_policyv1"}


Description
:   PodDisruptionBudget is an object to define the max disruption that can be caused to a collection of pods


Type
:     `object`