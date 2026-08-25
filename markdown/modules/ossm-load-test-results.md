{%- set _mod_docs_content_type = "CONCEPT" %}
# Load test results {id="ossm-load-test-results_{{ context }}"}

The upstream Istio community load tests mesh consists of **1000** services and **2000** sidecars with 70,000 mesh-wide requests per second.
Running the tests using Istio 1.12.3, generated the following results:

*   The Envoy proxy uses **0.35 vCPU** and **40 MB memory** per 1000 requests per second going through the proxy.
*   Istiod uses **1 vCPU** and **1.5 GB** of memory.
*   The Envoy proxy adds **2.65 ms** to the 90th percentile latency.
*   The legacy `istio-telemetry` service (disabled by default in Service Mesh 2.0) uses **0.6 vCPU** per 1000 mesh-wide requests per second for deployments that use Mixer.
The data plane components, the Envoy proxies, handle data flowing through the system. The {{ SMProductShortName }} control plane component, Istiod, configures the data plane. The data plane and control plane have distinct performance concerns.

## {{ SMProductShortName }} Control plane performance {id="_smproductshortname_control_plane_performance"}

Istiod configures sidecar proxies based on user authored configuration files and the current state of the system.
In a Kubernetes environment, Custom Resource Definitions (CRDs) and deployments constitute the configuration and state of the system.
The Istio configuration objects like gateways and virtual services, provide the user-authored configuration.
To produce the configuration for the proxies, Istiod processes the combined configuration and system state from the Kubernetes environment and the user-authored configuration.

The {{ SMProductShortName }} control plane supports thousands of services, spread across thousands of pods with a similar number of user authored virtual services and other configuration objects.
Istiod’s CPU and memory requirements scale with the number of configurations and possible system states.
The CPU consumption scales with the following factors:

*   The rate of deployment changes.
*   The rate of configuration changes.
*   The number of proxies connecting to Istiod.

However this part is inherently horizontally scalable.

## Data plane performance {id="_data_plane_performance"}

Data plane performance depends on many factors, for example:

*   Number of client connections
*   Target request rate
*   Request size and response size
*   Number of proxy worker threads
*   Protocol
*   CPU cores
*   Number and types of proxy filters, specifically telemetry v2 related filters.

The latency, throughput, and the proxies' CPU and memory consumption are measured as a function of these factors.

### CPU and memory consumption {id="_cpu_and_memory_consumption"}

Since the sidecar proxy performs additional work on the data path, it consumes CPU and memory. As of Istio 1.12.3, a proxy consumes about 0.5 vCPU per 1000 requests per second.

The memory consumption of the proxy depends on the total configuration state the proxy holds.
A large number of listeners, clusters, and routes can increase memory usage.

Since the proxy normally does not buffer the data passing through, request rate does not affect the memory consumption.

### Additional latency {id="_additional_latency"}

Since Istio injects a sidecar proxy on the data path, latency is an important consideration. Istio adds an authentication filter, a telemetry filter, and a metadata exchange filter to the proxy.
Every additional filter adds to the path length inside the proxy and affects latency.

The Envoy proxy collects raw telemetry data after a response is sent to the client.
The time spent collecting raw telemetry for a request does not contribute to the total time taken to complete that request.
However, because the worker is busy handling the request, the worker does not start handling the next request immediately.
This process adds to the queue wait time of the next request and affects average and tail latencies.
The actual tail latency depends on the traffic pattern.

Inside the mesh, a request traverses the client-side proxy and then the server-side proxy. In the default configuration of Istio 1.12.3 (that is, Istio with telemetry v2), the two proxies add about 1.7 ms and 2.7 ms to the 90th and 99th percentile latency, respectively, over the baseline data plane latency.