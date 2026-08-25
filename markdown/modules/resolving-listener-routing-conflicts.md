{%- set _mod_docs_content_type = "CONCEPT" %}
# Understand listener routing conflicts {id="resolving-listener-routing-conflicts_{{ context }}"}

When you configure a `Gateway` custom resource (CR) with multiple listeners, you must establish clear rules for overlapping hostnames and ports to ensure your traffic does not get misrouted. To avoid ambiguity, the Gateway API uses specific conflict management rules. {._abstract}

If your listener configurations violate these rules, the affected listener receives a `Conflicted` status condition and cannot route traffic correctly. 

To resolve or prevent routing conflicts, ensure that your listeners adhere to the following rules:

*   Distinct ports: A gateway can have distinct listeners that use the exact same hostname, provided their network ports are distinct.
*   Distinct hostnames: A gateway can have distinct listeners that use the exact same protocol and port, provided their hostnames are different.
*   Specificity precedence: If one listener uses a wildcard domain (for example, `+++*+++.<example_domain.tld>`) and another listener uses a more specific endpoint for that exact same domain (for example, `<www.example_domain.tld>`), the more specific entry takes precedence. 

    This specificity rule also applies to multiple wildcard domains. For example, `+++*+++.<example_domain.tld>` takes precedence over `+++*+++.<tld>`. This ensures that traffic intended for a specific subdomain is accurately routed to its dedicated listener, even if a broader wildcard listener exists.

    :::note

    In the Gateway API, wildcards match one or more complete DNS labels. For example, `+++*+++.<example.com>` matches `<www.example.com>` and `<sub.domain.example.com>`, but does not match the root domain `<example.com>`.
    
    :::