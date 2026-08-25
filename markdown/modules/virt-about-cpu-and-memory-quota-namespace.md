{%- set _mod_docs_content_type = "CONCEPT" %}
# About CPU and memory quotas in a namespace {id="virt-about-cpu-and-memory-quota-namespace_{{ context }}"}

A _resource quota_, defined by the `ResourceQuota` object, imposes restrictions on a namespace that limit the total amount of compute resources that can be consumed by resources within that namespace. {._abstract}

The `HyperConverged` custom resource (CR) defines the user configuration for the Containerized Data Importer (CDI). The CPU and memory request and limit values are set to a default value of `0`. This ensures that pods created by CDI that do not specify compute resource requirements are given the default values and are allowed to run in a namespace that is restricted with a quota.