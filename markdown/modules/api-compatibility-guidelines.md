{%- set _mod_docs_content_type = "CONCEPT" %}
# API compatibility guidelines {id="api-compatibility-guidelines_{{ context }}"}

Red Hat recommends that application developers adopt the following principles in order to improve compatibility with {{ product_title }}:

*   Use APIs and components with support tiers that match the application’s need.
*   Build applications using the published client libraries where possible.
*   Applications are only guaranteed to run correctly if they execute in an environment that is as new as the environment it was built to execute against. An application that was built for {{ product_title }} 4.14 is not guaranteed to function properly on {{ product_title }} 4.13.
*   Do not design applications that rely on configuration files provided by system packages or other components. These files can change between versions unless the upstream community is explicitly committed to preserving them. Where appropriate, depend on any Red Hat provided interface abstraction over those configuration files in order to maintain forward compatibility. Direct file system modification of configuration files is discouraged, and users are strongly encouraged to integrate with an Operator provided API where available to avoid dual-writer conflicts.
*   Do not depend on API fields prefixed with `unsupported<FieldName>` or annotations that are not explicitly mentioned in product documentation.
*   Do not depend on components with shorter compatibility guarantees than your application.
*   Do not perform direct storage operations on the etcd server. All etcd access must be performed via the api-server or through documented backup and restore procedures.

Red Hat recommends that application developers follow the [compatibility guidelines](https://access.redhat.com/articles/rhel8-abi-compatibility#Guidelines) defined by {{ op_system_base_full }}. {{ product_title }} strongly recommends the following guidelines when building an application or hosting an application on the platform:

*   Do not depend on a specific Linux kernel or {{ product_title }} version.
*   Avoid reading from `proc`, `sys`, and `debug` file systems, or any other pseudo file system.
*   Avoid using `ioctls` to directly interact with hardware.
*   Avoid direct interaction with `cgroups` in order to not conflict with {{ product_title }} host-agents that provide the container execution environment.


:::note

During the lifecycle of a release, Red Hat makes commercially reasonable efforts to maintain API and application operating environment (AOE) compatibility across all minor releases and z-stream releases. If necessary, Red Hat might make exceptions to this compatibility goal for critical impact security or other significant issues.

:::