{%- set _mod_docs_content_type = "CONCEPT" %}
# Configure MetalLB with a BGP advertisement and a basic use case {id="nw-metallb-configure-BGP-advertisement-basic-use-case_{{ context }}"}

Configure MetalLB so that the peer BGP routers receive one `203.0.113.200/32` route and one `fc00:f853:ccd:e799::1/128` route for each load-balancer IP address that MetalLB assigns to a service. {._abstract}

Because the `localPref` and `communities` fields are not specified, the routes are advertised with `localPref` set to zero and no BGP communities.

Ensure that you can configure MetalLB so that the peer BGP routers receive one `203.0.113.200/32` route and one `fc00:f853:ccd:e799::1/128` route for each load-balancer IP address that MetalLB assigns to a service. If you do not specify the `localPref` and `communities` parameters, MetalLB advertises the routes with `localPref` set to `0 and no BGP communities.