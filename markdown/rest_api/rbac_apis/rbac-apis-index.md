---
title: RBAC APIs
---

{%- set _mod_docs_content_type = "ASSEMBLY" %}
# RBAC APIs {id="rbac-apis"}
{%- set toc = "macro" -%}
{%- set toc_title = true %}

## ClusterRoleBinding [rbac.authorization.k8s.io/v1] {id="_clusterrolebinding_rbacauthorizationk8siov1"}


Description
:   ClusterRoleBinding references a ClusterRole, but not contain it.  It can reference a ClusterRole in the global namespace, and adds who information via Subject.


Type
:     `object`

## ClusterRole [rbac.authorization.k8s.io/v1] {id="_clusterrole_rbacauthorizationk8siov1"}


Description
:   ClusterRole is a cluster level, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding or ClusterRoleBinding.


Type
:     `object`

## RoleBinding [rbac.authorization.k8s.io/v1] {id="_rolebinding_rbacauthorizationk8siov1"}


Description
:   RoleBinding references a role, but does not contain it.  It can reference a Role in the same namespace or a ClusterRole in the global namespace. It adds who information via Subjects and namespace information by which namespace it exists in.  RoleBindings in a given namespace only have effect in that namespace.


Type
:     `object`

## Role [rbac.authorization.k8s.io/v1] {id="_role_rbacauthorizationk8siov1"}


Description
:   Role is a namespaced, logical grouping of PolicyRules that can be referenced as a unit by a RoleBinding.


Type
:     `object`